import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type KeyStatus =  number;
export interface KeyState {
  status:  number;
}

export const initialState: KeyState = {
  status: 0,
};

const keyValueSlice = createSlice({
  name: 'keyValue',
  initialState,
  reducers: {
    selectedKeyValue(state, action: PayloadAction<KeyStatus>) {
      state.status =  state.status+action.payload;
    },
  },
});
export const { selectedKeyValue } = keyValueSlice.actions;
export default keyValueSlice.reducer;
