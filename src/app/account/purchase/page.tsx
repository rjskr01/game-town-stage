"use client"
import { useEffect } from "react";
import AccountMenu from "../../component/account-menu";
import TournamentContainer from "../../component/tournament-container";
import Purchase from "../../component/purchase";

const Account = () => {
    

    return (
        <div className="flex flex-row min-w-screen">
            <div className="flex-[60%] ml-[50px]">
                <div className="w-[90%] h-auto md:h-[calc(100vh-150px)] bg-white mt-[20px] md:mt-[0px] pt-[20px] md:pt-[4px] pl-[20px] text-black">
                    <AccountMenu/>
                    <Purchase/>
                </div>

            </div>
            <TournamentContainer/>
        </div>
        
        
    )
}

export default Account;