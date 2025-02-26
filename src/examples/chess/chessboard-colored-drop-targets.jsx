  
import Piece from './draggable-piece-with-data';
import king from './king.png';
import pawn from './pawn.png'; 

const pieceTypes = ['king', 'pawn'];

export function King({ location }) {
	return <Piece location={location} pieceType={'king'} image={king} alt="King" />;
}

export function Pawn({ location }) {
	return <Piece location={location} pieceType={'pawn'} image={pawn} alt="Pawn" />;
}

export function isCoord(token){
	return (
		Array.isArray(token) && token.length === 2 && token.every((val) => typeof val === 'number')
	);
}

export function isPieceType(value) {
	return typeof value === 'string' && pieceTypes.includes(value);
}

export function isEqualCoord(c1, c2) {
	return c1[0] === c2[0] && c1[1] === c2[1];
}

export const pieceLookup = {
	king: (location) => <King location={location} />,
	pawn: (location) => <Pawn location={location} />,
};

export function canMove(
	start,
	destination,
	pieceType,
	pieces,
) {
	const rowDist = Math.abs(start[0] - destination[0]);
	const colDist = Math.abs(start[1] - destination[1]);

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
