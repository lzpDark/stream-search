
import { combine } from 'zustand/middleware'
import { create } from 'zustand'

const initialState = {
    history: [Array(9).fill(null)],
    currentMove: 0,
}

const action = (set, get) => {
    return {
        setHistory: (nextHistory) => {
            set((state) => ({
                history: nextHistory,
            }))
        },
        setCurrentMove: (nextCurrentMove) => {
            set((state) => ({
                currentMove: nextCurrentMove,
            }))
        },
    }
}

const useGameStore = create(
    combine(
        initialState,
        action,
    ),
)

function Square({ value, onSquareClick }) {
    return (
        <button onClick={onSquareClick}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                backgroundColor: '#fff',
                border: '1px solid #999',
                outline: 0,
                borderRadius: 0,
                fontSize: '1rem',
                fontWeight: 'bold',
            }}
        >
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {

    const winner = getWinnerOrNull(squares);
    const gameInformation = getGameInformation(squares);

    return (
        <div>
            <p>State is: {gameInformation}</p>
            <p>winner in board is : {winner}</p>
            <br />
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(3, 1fr)',
                    width: 'calc(3 * 2.5rem)',
                    height: 'calc(3 * 2.5rem)',
                    border: '1px solid #999',
                }}
            >
                {squares.map((square, idx) => (
                    <Square
                        key={idx}
                        value={square}
                        onSquareClick={() => { clickSquare(squares, xIsNext, idx, onPlay); }} />
                ))}
            </div>
        </div>
    );
}

export default function Game() {

    const history = useGameStore((state) => state.history)
    const setHistory = useGameStore((state) => state.setHistory)
    const currentMove = useGameStore((state) => state.currentMove)
    const setCurrentMove = useGameStore((state) => state.setCurrentMove)
    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                fontFamily: 'monospace',
            }}
        >
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div style={{ marginLeft: '1rem' }}>
                <ol>
                    {history.map((_, historyIndex) => {
                        const description =
                            historyIndex > 0
                                ? `Go to move #${historyIndex}`
                                : 'Go to game start'

                        return (
                            <li key={historyIndex}>
                                <button onClick={() => jumpTo(historyIndex)}>
                                    {description}
                                </button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    );

    function handlePlay(nextSquares) {
        // append to history
        const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
        setHistory(nextHistory);

        // update step
        // setCurrentMove(history.length - 1); // ops, not work
        setCurrentMove(nextHistory.length - 1)
    }

    function handlePlay2(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    function jumpTo(idx) {
        setCurrentMove(idx);
    }
}


function getWinnerOrNull(squares) {
    const winMatrix = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winMatrix.length; i++) {
        const [a, b, c] = winMatrix[i];
        if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
            // win
            console.log(a, b, c, squares[a])
            return squares[a];
        }
    }
    return null; // not win yet
}

function getGameInformation(squares, xIsNext) {
    const winner = getWinnerOrNull(squares);
    if (!winner && squares.filter((square) => !square).length === 0) {
        return `Draw`; // no one win
    }
    if (winner) {
        return `Winner: ${winner}`;
    } else {
        return `Next ${xIsNext ? 'x' : 'o'}`;
    }
}

function clickSquare(squares, xIsNext, idx, onPlay) {
    console.log("click square:", idx, squares)
    if (squares[idx]) {
        return;
    }
    const winner = getWinnerOrNull(squares);
    console.log("winner:" + winner)
    if (winner) {
        return;
    }
    console.log("xxxxx: ")
    // create new square with current change
    const nextSquares = squares.slice();
    nextSquares[idx] = xIsNext ? 'x' : 'o';
    console.log("nextSquares: " + nextSquares)

    onPlay(nextSquares);
}
