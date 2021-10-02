import {ActionType} from '../actionTypesEnum';
import {Action} from '../actions'

interface npmPackagesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
};

const npmPackagesReducer = (
  state: npmPackagesState = initialState, 
  action: Action
): npmPackagesState => {
  switch (action.type) {
    // this action means a new http request to the api has just been made
    // in other words, this action happens when user clicks the "search" btn
    case ActionType.SEARCH_PACKAGES:
      return {loading: true, error: null, data: []};
    
    // action.payload is the info of the npm packages fetched from the api
    case ActionType.SEARCH_SUCCESS:
      return {loading: false, error: null, data: action.payload};
    
    // action.payload is the error msg contained in the response from the api
    case ActionType.SEARCH_FAIL:
      return {loading: false, error: action.payload, data: []};
    
    default:
      return state;
  }
};

export default npmPackagesReducer;