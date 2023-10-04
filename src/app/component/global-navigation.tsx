"use client";

import Login from "./login";
import MainNavigation from "./main-navigation";
import SecondaryNavigation from "./secondary-navigation";
import TournamentHeader from "./tournament-header";

const GlobalNavigation = () => {
    return(
        <div className="flex flex-row">
            
            <section className="flex-[60%] ml-[50px]">
                <MainNavigation/>
                <Login/>
                <SecondaryNavigation/>
            </section>

            <section className="trnmntaddSectionCls mt-[20px] flex-[40%]">
                <TournamentHeader/>
                <div id="trmntLstHdr" className="mt-[60px] text-[30px] md:text-[18px] w-[55%] text-center font-['Arial, Helvetica, sans-serif']">TOURNAMENT LISTING</div>
            </section>

        </div>
    )
}

export default GlobalNavigation;