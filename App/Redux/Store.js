import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './Reducers/Videos';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const Store = createStore(persistedReducer)
const Persistor = persistStore(Store)

export { Store, Persistor };