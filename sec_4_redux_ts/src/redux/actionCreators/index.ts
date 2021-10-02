// https://registry.npmjs.org/-/v1/search?text=react
import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionType} from '../actionTypesEnum';
import {Action} from '../actions';

const apiUrl = 'https://registry.npmjs.org/-/v1/search';

export const searchPackage = (packageName: string) => {
  // Dispatch<Action> ensures that dispatch is called with a valid type of 
  // payload for the action types of SEARCH_SUCCESS & SEARCH_FAIL
  return async(dispatch: Dispatch<Action>) => {
    // dispatch an action to fetch a list of npm packages
    dispatch({type: ActionType.SEARCH_PACKAGES});

    // make a network request to the api
    try {
      const {data} = await axios.get(
        apiUrl, 
        {params: {text: packageName}}
      );

      console.log(data);

      const fetchedPackages = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_SUCCESS,
        payload: fetchedPackages
      });
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_FAIL,
        payload: error.message
      });
    }
  };
};