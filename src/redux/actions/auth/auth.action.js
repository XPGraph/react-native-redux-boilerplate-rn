import {createAction} from '../../../shared/utils/create-action';

export const setToken = createAction('SET_TOKEN', 'token');
export const deleteToken = createAction('DELETE_TOKEN');
