 

import Square from './square-with-can-drop.jsx';
import {isEqualCoord, isCoord, pieceLookup} from './chessboard-colored-drop-targets.jsx'
import { useState } from 'react';
 

function renderSquares(pieces, setPieces) {
	const squares = [];
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const squareCoord = [row, col];

			const piece = pieces.find((piece) => isEqualCoord(piece.location, squareCoord));

			squares.push(
				<Square setPieces = {setPieces} key={`${row}_${col}`} pieces={pieces} location={squareCoord}>
					{piece && pieceLookup[piece.type](squareCoord)}
				</Square>,
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

	return <div className="chessboardStyles">{renderSquares(pieces, setPieces)}</div>;
}
 

export default Chessboard;
