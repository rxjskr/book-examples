import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import errorMessage from './errorMessage';

export default combineReducers({
    auth,
    loading,
    errorMessage,
});
