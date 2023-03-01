import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface ModeState {
    isToggled: boolean;
    currentTitle: string;
    deriAmtInWallet: string;
    bnbAmtInWallet: string;
}

const initialState: ModeState = {
  isToggled: false,
  currentTitle: '',
  deriAmtInWallet: 'Loading',
  bnbAmtInWallet: 'Loading',
};


export const mode = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setToggle:(state) => {
        state.isToggled = !state.isToggled;
    },
    setCurrentTitle: (state, action) => {
      state.currentTitle = action.payload;
    },
    setderiAmtInWallet: (state, action) => {
      state.deriAmtInWallet = action.payload;
    },
    setbnbAmtInWallet: (state, action) => {
      state.bnbAmtInWallet = action.payload;
    },
  },
  
});

export const { setToggle, setCurrentTitle, setderiAmtInWallet, setbnbAmtInWallet } = mode.actions;

export const getToggle = (state: RootState) => state.mode.isToggled;
export const getCurrentTitle = (state: RootState) => state.mode.currentTitle;
export const getderiAmtInWallet = (state: RootState) => state.mode.deriAmtInWallet;
export const getbnbAmtInWallet = (state: RootState) => state.mode.bnbAmtInWallet;

export default mode.reducer;
