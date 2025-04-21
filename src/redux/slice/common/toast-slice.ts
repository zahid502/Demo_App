import {createSlice} from '@reduxjs/toolkit';
import {ToastState} from '../../states';
import {ToastMessage} from '@app-types';

//-------------------------------
// Define the accepted ToastType values
type AcceptedToastTypes = 'success' | 'error' | 'info' | 'warning';

//-------------------------------
// Ensure ToastMessage uses the accepted ToastType values
interface ValidatedToastMessage extends ToastMessage {
  type: AcceptedToastTypes;
}

//-------------------------------
// Initial state with validated ToastType
const initialState: ToastState = {
  message: '',
  type: '',
};

//-------------------------------
const toastSlice = createSlice({
  name: 'toast',
  initialState: initialState,
  reducers: {
    setToastMessage: (state, {payload}: {payload: ValidatedToastMessage}) => {
      if (
        state.message !== payload?.message &&
        isValidToastType(payload.type)
      ) {
        state.message = payload?.message;
        state.type = payload?.type;
      }
    },
    clearToastMessageState: (state, {payload}) => {
      state.message = '';
      state.type = '';
    },
  },
});

// Utility function to validate ToastType
const isValidToastType = (type: string): type is AcceptedToastTypes => {
  return ['success', 'error', 'info', 'warning'].includes(type);
};

//-------------------------------
// Export reducer and actions
const toastReducer = toastSlice.reducer;
export const {setToastMessage, clearToastMessageState} = toastSlice.actions;
export default toastReducer;
