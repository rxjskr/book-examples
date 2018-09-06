import { combineEpics } from 'redux-observable';
import authEpic from './authEpic';

export default combineEpics(
    authEpic,
);
