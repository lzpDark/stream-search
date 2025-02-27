import { createContext, useContext } from 'react';

import invariant from 'tiny-invariant';
 
  

// export type BoardContextValue = {
// 	getColumns: () => ColumnType[];

// 	reorderColumn: (args: { startIndex: number; finishIndex: number }) => void;

// 	reorderCard: (args: { columnId: string; startIndex: number; finishIndex: number }) => void;

// 	moveCard: (args: {
// 		startColumnId: string;
// 		finishColumnId: string;
// 		itemIndexInStartColumn: number;
// 		itemIndexInFinishColumn?: number;
// 	}) => void;

// 	registerCard: (args: {
// 		cardId: string;
// 		entry: {
// 			element: HTMLElement;
// 			actionMenuTrigger: HTMLElement;
// 		};
// 	}) => CleanupFn;

// 	registerColumn: (args: {
// 		columnId: string;
// 		entry: {
// 			element: HTMLElement;
// 		};
// 	}) => CleanupFn;

// 	instanceId: symbol;
// };

export const BoardContext = createContext (null);

export function useBoardContext() {
	const value = useContext(BoardContext);
	invariant(value, 'cannot find BoardContext provider');
	return value;
}
