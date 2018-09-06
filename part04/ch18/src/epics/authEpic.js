import { from } from 'rxjs';
import { switchMap, mergeMap, startWith, catchError, concat } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import * as ActionTypes from '../constants/ActionTypes';
import * as actions from '../actions';
import { fakeAuth } from '../services/authService';

export default function authEpic (action$, store) {
    return action$
        .pipe(
            ofType(ActionTypes.GET_AUTH),
            switchMap(action => from(fakeAuth(action.username, action.password))
                .pipe(
                    mergeMap(auth => [actions.setAuth(auth), actions.hideErrorMessage()]),
                    startWith(actions.loadingStart()),
                    catchError(err => [actions.showErrorMessage(err.message)]),
                    concat([actions.loadingEnd()])
                )
            )
        );
}
