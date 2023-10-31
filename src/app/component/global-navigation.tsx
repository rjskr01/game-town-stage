"use client";

import Login from "./login";
import MainNavigation from "./main-navigation";
import SecondaryNavigation from "./secondary-navigation";
import TournamentHeader from "./tournament-header";

const GlobalNavigation = () => {
    return (
        <div className="flex flex-row min-w-screen">

            <section className="flex-[60%] ml-[50px]">
                <MainNavigation />
                <Login />
                <SecondaryNavigation />
            </section>

            <section className="trnmntaddSectionCls flex-[40%]">
                <TournamentHeader />
                <div id="trmntLstHdr" className="mt-[60px] text-[20px] w-[55%] text-center font-['Arial, Helvetica, sans-serif']">TOURNAMENT LISTING</div>
            </section>

        </div>
    )
}

export default GlobalNavigation;