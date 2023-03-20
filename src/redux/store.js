import { configureStore, createSlice } from '@reduxjs/toolkit';
/* import { persistStore } from 'redux-persist'; */

const initialState = {
  currentLocale: JSON.parse(window.localStorage.getItem('locale')) ?? {
    value: 'ua',
    label: 'UA',
  },
};

const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    changeLanguege(state, action) {
      state.currentLocale = {
        value: action.payload,
        label: action.payload,
      };
    },
  },
});

export const store = configureStore({
  reducer: { locale: localeSlice.reducer },
});

export const { changeLanguege } = localeSlice.actions;

/* export const persistor = persistStore(store); */
