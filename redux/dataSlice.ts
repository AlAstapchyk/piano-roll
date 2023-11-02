import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type stateType = {
  start: number;
  end: number;
  duration: number;
  pitch: number;
  velocity: number;
};

const initialState: stateType[] = [];

export const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state: stateType[], action: PayloadAction<stateType[]>) => {
      state = action.payload;
      return action.payload;
    },
  },
});

export const { setData } = data.actions;
export default data.reducer;
