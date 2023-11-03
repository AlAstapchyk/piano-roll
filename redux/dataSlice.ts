import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state: any[], action: PayloadAction<any[]>) => {
      state = action.payload;
      return action.payload;
    },
  },
});

export const { setData } = data.actions;
export default data.reducer;
