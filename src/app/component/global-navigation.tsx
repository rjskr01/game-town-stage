"use client";

import { toggleGameContainerVisbility } from "@/redux/features/game-container-visibility-slices";
import Login from "./login";
import MainNavigation from "./main-navigation";
import SecondaryNavigation from "./secondary-navigation";
import TournamentHeader from "./tournament-header";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";


const GlobalNavigation = () => {

    const isGameContainerHidden = useSelector((state: RootState) => state.rootReducer.value.isHidden);
    const dispatch = useDispatch<AppDispatch>();

    const closeGamePopup = (e: MouseEvent) => {
        let linkElement = e.target as HTMLElement;
        if(linkElement.textContent === 'Home') {
            if(!isGameContainerHidden) {
                dispatch(toggleGameContainerVisbility());
            }
            console.log(isGameContainerHidden);
        }
    }

    return(
        <div className="flex flex-row min-w-screen">
            
            <section className="flex-[60%] ml-[50px]">
                <MainNavigation/>
                <Login/>
                <SecondaryNavigation handleClick={closeGamePopup}/>
            </section>

            <section className="trnmntaddSectionCls flex-[40%]">
                <TournamentHeader/>
                <div id="trmntLstHdr" className="mt-[20px] text-[18px] w-[55%] text-center font-['Arial, Helvetica, sans-serif']">TOURNAMENT LISTING</div>
            </section>

        </div>
    )
}

export default GlobalNavigation;