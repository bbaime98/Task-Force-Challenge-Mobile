import { configureStore } from '@reduxjs/toolkit';
import appReducer from './Newbugs';

export default function () {
  return configureStore({ reducer:{ appReducer } });
}
