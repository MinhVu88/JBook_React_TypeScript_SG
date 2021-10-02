import {ActionType} from '../actionTypesEnum';

interface searchPackagesAction {
  type: ActionType.SEARCH_PACKAGES;
}

interface searchSuccessAction {
  type: ActionType.SEARCH_SUCCESS;
  payload: string[];
}

interface searchFailAction {
  type: ActionType.SEARCH_FAIL;
  payload: string;
}

export type Action = searchPackagesAction | searchSuccessAction | searchFailAction;