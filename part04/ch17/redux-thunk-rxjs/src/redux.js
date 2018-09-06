import { Observable, Subject, BehaviorSubject, of, from, empty } from 'rxjs';
import { concatMap, scan } from 'rxjs/operators';

export function createStore (rootReducer, initialState) {
    const actionDispatcher$ = new Subject();
    const store$ = new BehaviorSubject(initialState);

    //action 함수에 전달할 수 있도록 미리 선언
    const dispatch = actionDispatcher$.next.bind(actionDispatcher$);
    const subscribe = store$.subscribe.bind(store$);
    const getState = store$.getValue.bind(store$);

    actionDispatcher$
        .pipe(concatMap(action => {
            // Promise 혹은 Observable 인 경우 from 연산자로 처리
            if (action instanceof Promise || action instanceof Observable) {
                return from(action);
            }
            if (typeof action === 'function') {
                action(dispatch, getState); //action 함수 실행
                return empty(); //이번 액션은 무시
            }
            return of(action); //그 외에는 scan 오퍼레이터에 action 전달
        }))
        .pipe(scan(rootReducer, initialState))
        .subscribe(store$);

    return {
        dispatch,
        subscribe,
        getState,
    };
}
