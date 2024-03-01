import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: GameContainerVisibleState
}

type GameContainerVisibleState = {
    isHidden: boolean,
    isMaximized: boolean,
    isNotificationPopupVisible: boolean,
    message: string
};

const intitialState = {
    value: {
        isHidden: true,
        isMaximized: false,
        isNotificationPopupVisible: false
    } as GameContainerVisibleState,
} as InitialState;

export const gameContainerVisibilitySlice = createSlice({
    name: 'gameContainerVisibility',
    initialState: intitialState,
    reducers: {
        toggleGameContainerVisbility: (state) => {
            state.value.isHidden = !state.value.isHidden;
            return state;
        },
        toggleGameContainerMaximized: (state, action: PayloadAction<boolean>) => {
            state.value.isMaximized = action.payload;
            return state;
        },
        showNotificationPopup: (state, action: PayloadAction<string>) => {
            state.value.isNotificationPopupVisible = true;
            state.value.message = action.payload;
            setTimeout(()=>{
              
                console.log("Time interval was completed");
                // state.value.isNotificationPopupVisible = false;
                // state.value.message = "";
            }, 2000);
            return state;
        },
        hideNotificationPopup: (state)=>{
            state.value.isNotificationPopupVisible = false;
            state.value.message = "";
            return state;
        }
    }
});

export const { toggleGameContainerVisbility, toggleGameContainerMaximized , showNotificationPopup, hideNotificationPopup } = gameContainerVisibilitySlice.actions;
export default gameContainerVisibilitySlice.reducer;
