import { ActionType } from "../actionTypesEnum";
import {
	DeleteCellAction,
	InsertCellAfterAction,
	MoveCellAction,
	UpdateCellAction
} from "../actions";
import { CellTypes, CellDirections } from "../cell";

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
