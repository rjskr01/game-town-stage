import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
    value: NotificationPopupVisibleState
}

type NotificationPopupVisibleState = {
    isShow: boolean,
    message: string
}

const initialState = {
     value: {
        isShow : false,
        message: ""
     } as NotificationPopupVisibleState
} as InitialState;

export const notificationPopupVisibilitySlice = createSlice({
    name: "notificationPopupVisiblity",
    initialState: initialState,
    reducers: {
        showNotificationPopup: ( state, action: PayloadAction<string>) => {
            state.value.message = action.payload; 
            state.value.isShow = true;
            setTimeout(()=>{
                hideNotificationPopup();
            }, 2000);
            return state;
        },
        hideNotificationPopup: (state) => {
            state.value.isShow = false;
            return state;
        }
    }
});

export const { showNotificationPopup, hideNotificationPopup } = notificationPopupVisibilitySlice.actions;
export default notificationPopupVisibilitySlice.reducer;