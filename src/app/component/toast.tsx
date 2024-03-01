'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";


import { hideNotificationPopup } from "@/redux/features/game-container-visibility-slices";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";



type ToastProps = {
    message?: string,
    isShow?: boolean
}

const Toast: React.FC<ToastProps> = () => {

    let {isNotificationPopupVisible, message} = useSelector((state: RootState) => state.rootReducer.value);
    const dispatch = useDispatch<AppDispatch>();

    const hide = () => {
        dispatch(hideNotificationPopup());
    }

    return (
        <>
            {
                <div className={`toast bg-[#fff] p-[1.5rem] rounded-[0.5em] text-[black] absolute top-0 right-6 flex flex-row ${!isNotificationPopupVisible ? 'hidden' : ""}`}>
                                <div className="toast-message w-[400px] h-auto top-1 right-1 text-[16px]" >
                                    <p>
                                        { message }
                                    </p>
                                </div>
                                <img src="assets/images/icons8-close-24.png" className="w-[16px] h-[16px] cursor-pointer" onClick={hide} />
                </div>
            }
        </>
    )
}

export default Toast;