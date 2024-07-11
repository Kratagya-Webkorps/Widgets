import { configureStore } from '@reduxjs/toolkit';
import widgetsReducer from './reducers/widgetReducer';
import { WidgetActionTypes } from './actions/widgetActions'; 

const store = configureStore({
  reducer: {
    widgets: widgetsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootAction = WidgetActionTypes; 

export default store;
