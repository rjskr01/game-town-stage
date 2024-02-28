'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

type ToastProps = {
    message?: string,
    isShow?: boolean
}

const Toast: React.FC<ToastProps> = () => {

    const {isNotificationPopupVisible, message} = useSelector((state: RootState) => state.rootReducer.value);

    useEffect(()=>{
        console.log("Toast component was rendered.");
    });

    return (
        <>
            {
                 <div className={`toast ${!isNotificationPopupVisible ? 'hidden' : ""}`}>
                                <div className="toast-message w-[400px] h-auto top-1 right-1" >
                                    <p>
                                        { message }
                                    </p>
                                </div>
                            </div>
            }
        </>
    )
}

export default Toast;