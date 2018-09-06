import { Subject, BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';

export function createStore (rootReducer, initialState) {
    const actionDispatcher$ = new Subject();
    const store$ = new BehaviorSubject(initialState);
    actionDispatcher$
        .pipe(scan(rootReducer, initialState))
        .subscribe(store$);

    return {
        dispatch: actionDispatcher$.next.bind(actionDispatcher$),
        subscribe: store$.subscribe.bind(store$),
        getState: store$.getValue.bind(store$),
    };
}
