import {combineReducers} from 'redux';
import npmPackagesReducer from './npmPackagesReducer';

const reducers = combineReducers({
  packages: npmPackagesReducer
});

export default reducers;

// vid 41
export type RootState = ReturnType<typeof reducers>;