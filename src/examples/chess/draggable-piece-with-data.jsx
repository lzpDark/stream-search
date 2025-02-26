 
import { useEffect, useRef, useState } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import "./chess.css"


const Piece = ({ location, pieceType, image, alt }) => {
	const ref = useRef(null);
	const [dragging, setDragging] = useState (false);

	useEffect(() => {
		const el = ref.current; 

		return draggable({
			element: el,
			getInitialData: () => ({ location, pieceType }),
			onDragStart: () => setDragging(true),
			onDrop: () => setDragging(false),
		});
	}, [location, pieceType]);

	return (
		<img
            className="imageStyles" 
			style={dragging ? { opacity: 0.4 } : {}} // fading the piece during dragging
			src={image}
			alt={alt}
			ref={ref}
		/>
	);
};
 

export default Piece;
