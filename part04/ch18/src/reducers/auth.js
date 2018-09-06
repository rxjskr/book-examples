import * as ActionTypes from '../constants/ActionTypes';

export default function auth (state = null, action = {}) {
    switch (action.type) {
        case ActionTypes.SET_AUTH:
            return action.auth;

        case ActionTypes.RESET_AUTH:
            return null;

        default:
            return state;
    }
}
