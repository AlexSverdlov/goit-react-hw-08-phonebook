import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReduсer from './contacts/contacts-reducer';
import authReduсer from './auth/auth-reduser';

// const initialState = {
//   contacts: {
//     items: [
//       { id: 1, name: 'ffff', number: '1111' },
//       { id: 2, name: 'fffd', number: '2222' },
//     ],
//     filter: 'ff',
//   },
// };

// const itemsPersistConfig = {
//   key: 'items',
//   storage,
//   blacklist: ['filter'],
// };

const myMiddlware = store => next => action => {
  // console.log('dasdadads', action);
  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  myMiddlware,
];

const authPersistConfih = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfih, authReduсer),
    contacts: contactsReduсer,
  },
  middleware,
});

const persistor = persistStore(store);

export default { store, persistor };
