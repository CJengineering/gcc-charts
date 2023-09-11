import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type TableStatus =  'year'|'month';
export interface TableState {
  status:  'year'|'month';
}

export const initialState: TableState = {
  status: 'year',
};

const rangeSelectorSlice = createSlice({
  name: 'rangeSelector',
  initialState,
  reducers: {
    selectedTableValue(state, action: PayloadAction<TableStatus>) {
      state.status = action.payload;
    },
  },
});
export const { selectedTableValue } = rangeSelectorSlice.actions;
export default rangeSelectorSlice.reducer;
