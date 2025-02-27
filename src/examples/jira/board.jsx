import React, { forwardRef, memo,   ReactNode, useEffect } from 'react';

import { autoScrollWindowForElements } from '@atlaskit/pragmatic-drag-and-drop-auto-scroll/element'; 

import { useBoardContext } from './board-context';
 

const Board = forwardRef (({ children } , ref) => {
	const { instanceId } = useBoardContext();

	useEffect(() => {
		return autoScrollWindowForElements({
			canScroll: ({ source }) => source.data.instanceId === instanceId,
		});
	}, [instanceId]);

	return (
		<div className={"boardStyles"} ref={ref}>
			{children}
		</div>
	);
});

export default memo(Board);
