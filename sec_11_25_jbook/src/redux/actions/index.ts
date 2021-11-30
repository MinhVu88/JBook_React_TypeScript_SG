import { ActionType } from "../actionTypesEnum";
import { CellTypes, CellDirections } from "../cell";

export interface InsertCellAfterAction {
	type: ActionType.INSERT_CELL_AFTER;
	payload: { id: string | null; type: CellTypes };
}

export interface UpdateCellAction {
	type: ActionType.UPDATE_CELL;
	payload: { id: string; content: string };
}

export interface DeleteCellAction {
	type: ActionType.DELETE_CELL;
	payload: string;
}

export interface MoveCellAction {
	type: ActionType.MOVE_CELL;
	payload: { id: string; direction: CellDirections };
}

// specify payload for the bundling actions -> vid 225
export interface StartBundlingAction {
	type: ActionType.START_BUNDLING;
	payload: string;
}

export interface CompleteBundlingAction {
	type: ActionType.COMPLETE_BUNDLING;
	payload: {
		id: string;
		output: { code: string; error: string }
	};
}

export type Action = 
	InsertCellAfterAction | 
	UpdateCellAction | 
	DeleteCellAction | 
	MoveCellAction | 
	StartBundlingAction | 
	CompleteBundlingAction;
