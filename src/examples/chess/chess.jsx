import { ReactElement, useEffect, useRef, useState } from 'react';
import './chess.css';
import { draggable, dropTargetForElements, monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import king from './king.png';
import pawn from './pawn.png'; 

function isEqualCoord(c1, c2) {
	return c1[0] === c2[0] && c1[1] === c2[1];
}

const pieceLookup = {
	king: (location) => <Piece location={location} pieceType="king" src={king}/>,
	pawn: (location) => <Piece location={location} pieceType="pawn" src={pawn}/>,
};

// eg: location: [1,1]
const Piece = ({location, pieceType, src})=> {

	const ref = useRef();
	const [isDragging, setIsDragging] = useState(false);

	useEffect(()=>{
		return draggable({
			element: ref.current,
			getInitialData: ()=> ({location, pieceType}),
			onDrag: ()=> {
				setIsDragging(true);
			},
			onDrop: ()=> {
				setIsDragging(false);
			}
		})
	}, [])

	return (
		<img ref={ref} className='imageStyles'
		  src={src} 
		  alt={pieceType} 
		  style={isDragging ? {opacity: 0.2}: {}}
		  draggable="false" />
	);
}

function canMove(
	start,
	destination,
	pieceType,
	pieces,
) {
	const rowDist = Math.abs(start[0] - destination[0]);
	const colDist = Math.abs(start[1] - destination[1]);
	console.log("canMove", start, destination, pieceType, pieces)
	if (pieces.find((piece) => isEqualCoord(piece.location, destination))) {
		return false;
	}

	switch (pieceType) {
		case 'king':
			return [0, 1].includes(rowDist) && [0, 1].includes(colDist);
		case 'pawn':
			return colDist === 0 && start[0] - destination[0] === -1;
		default:
			return false;
	}
}

const Square = ({location, pieces, children}) => {

	// idle, accepting, refusing
	const [status, setStatus] = useState('idle')
	const ref = useRef();

	useEffect(()=>{
		return dropTargetForElements({
			element: ref.current,
			getData: ()=> ({location}),
			canDrop: ({ source }) => {
				return source.data.location[0] != location[0] || source.data.location[1] != location[1];
			},
			onDragEnter: ({source})=> {
				// check if piece can be put in current square
				console.log("canMove", source.data.location, location, source.data.pieceType, pieces)
 
				const move = canMove(source.data.location, location, source.data.pieceType, pieces);
				setStatus(move ? 'accepting' : 'refusing');
				console.log("onDragEnterx", source.data.location)
			},
			onDragLeave: ()=>{
				setStatus('idle');
				console.log("onDragLeave")
			},
			onDrop: ()=>{
				setStatus('idle');
				console.log("onDrop")
			}
		});
	}, [location])

	
	const getBackground = ()=>{
		const isDark = ((location[0] + location[1]) % 2 === 1);
		console.log(status);
		if(status != 'idle') {
			return status == 'accepting' ? 'green' : 'red';
		}
		return isDark? 'lightgrey' : 'white';
	}
	return (
		<div className='squareStyles'
			style={{backgroundColor: getBackground()}}
			ref={ref}
		>
			{children}
		</div>
	);
}
 
function renderSquares(pieces) {
	const squares = [];
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const squareCoord = [row, col];

			const piece = pieces.find((piece) => isEqualCoord(piece.location, squareCoord));
			squares.push(
                <Square key={`${row}-${col}`}
				  pieces={pieces} 
				  location={squareCoord}>
                  {piece && pieceLookup[piece.type](squareCoord)}
                </Square>
			);
		}
	}
	return squares;
}

function Chessboard() {
	const [pieces, setPieces] = useState([
		{ type: 'king', location: [3, 2] },
		{ type: 'pawn', location: [1, 6] },
	]);

	useEffect(()=>{
		return monitorForElements({
			onDrop({ source, location }) {
                const destination = location.current.dropTargets[0];
                if (!destination) {
                    // if dropped outside of any drop targets
                    return;
                }
                const destinationLocation = destination.data.location;
                const sourceLocation = source.data.location;
                const pieceType = source.data.pieceType;

               

                const piece = pieces.find((p) => isEqualCoord(p.location, sourceLocation));
                const restOfPieces = pieces.filter((p) => p !== piece);

                if (
                    canMove(sourceLocation, destinationLocation, pieceType, pieces) &&
                    piece !== undefined
                ) {
                    // moving the piece!
                    setPieces([{ type: piece.type, location: destinationLocation }, ...restOfPieces]);
                }
            },
		});
	}, [pieces])

	return <div className='chessboardStyles'>{renderSquares(pieces)}</div>;
}


export default Chessboard;