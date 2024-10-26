
import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer/rootReducer";
import rootSaga from "./saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const persistConfig = {
  key: "react",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
