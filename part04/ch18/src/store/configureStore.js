import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';
import rootReducer from '../reducers';

export default function configureStore() {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(createEpicMiddleware(rootEpic)),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    return store;
}
