import { Dispatch } from 'redux';
import { ActionType } from "../actionTypesEnum";
import { CellTypes, CellDirections } from "../cell";
import { startService } from '../../bundler/esbuild/index';
import {
	Action,
	DeleteCellAction,
	InsertCellAfterAction,
	MoveCellAction,
	UpdateCellAction
} from "../actions";

// synchronous actions
export const insertCellAfter = (
	id: string | null, 
	cellType: CellTypes
): InsertCellAfterAction => {
	return {
		type: ActionType.INSERT_CELL_AFTER,
		payload: { id, type: cellType }
	};
};

export const updateCell = (
	id: string, 
	content: string
): UpdateCellAction => {
	return {
		type: ActionType.UPDATE_CELL,
		payload: { id, content }
	};
};

export const deleteCell = (id: string): DeleteCellAction => {
	return {
		type: ActionType.DELETE_CELL,
		payload: id
	};
};

export const moveCell = (
	id: string, 
	direction: CellDirections
): MoveCellAction => {
	return {
		type: ActionType.MOVE_CELL,
		payload: { id, direction }
	};
};

// asynchronous action
export const bundle = (id: string, userInput: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.START_BUNDLING,
			payload: id
		});

		const { code, error } = await startService(userInput);

		dispatch({
			type: ActionType.COMPLETE_BUNDLING,
			payload: {
				id,
				output: { code, error }
			}
		});
	};
};