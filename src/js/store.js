import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookReducer, penReducer } from './toolkitSlicer';

const rootReducer = combineReducers({
  book: bookReducer,
  pen: penReducer,
});

const store = configureStore({
  reducer: rootReducer,

});

export default store;





// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';


// Define the middleware including the logger
// const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: middleware,
// });

