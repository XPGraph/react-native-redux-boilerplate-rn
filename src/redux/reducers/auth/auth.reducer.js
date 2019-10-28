import {createReducer} from '../../../shared';
import {setToken, deleteToken} from '../../actions';

export const authReducer = createReducer(
  {},
  {
    [setToken]: (state, {token}) => token,
    [deleteToken]: () => null,
  },
);
