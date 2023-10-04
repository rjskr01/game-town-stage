'use client'

import { useSelector, useStore } from "react-redux";
import AddBanner from "./add-banner";
import DropDownList from "./drop-down-list";
import TournamentHeader from "./tournament-header";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

const TournamentContainer = () => {

    const isMaximized = useSelector((state: RootState) => state.rootReducer.value.isMaximized);
    const [isUrlHasAccount, setIsUrlHasAccount] = useState(false);

    useEffect(() => {
      console.log("isMaximized updated");
      console.log(isMaximized);
    },[isMaximized])

    useEffect(()=>{
      const urlHasAccount = window.location.href.includes("account");
      setIsUrlHasAccount(urlHasAccount);
    },[])


    let currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });

    currentDate = currentDate.replace(/\//g, "-");

    const onEventTitleClick = () => {

    }
    return (
        <section className="trnmntaddSectionCls mt-[20px] flex-[40%]">
            {/* <TournamentHeader/>
            <div id="trmntLstHdr" className="mt-[60px] text-[30px] md:text-[18px] w-[55%] text-center font-['Arial, Helvetica, sans-serif']">TOURNAMENT LISTING</div> */}
        <div id='trnmtLstnHolder' className="w-[90%] flex bg-white h-[calc(100vh-200px)] text-[black]">
            <div id="trnmtdtsHdr" className= {`flex-[2] ${isMaximized ? 'invisible' : ''}` }>
                <div className="w-full m-auto text-center mt-[20px]">
                    <DropDownList/>
                </div>
                <div className="flex justify-around font-bold text-[20px] font-['Arial']">
                    <a id="houseEvent" onClick={onEventTitleClick} href="#">HOUSE EVENTS</a> 
                    <a id ="clubEvent" onClick={onEventTitleClick} href="#">CLUB EVENTS</a>
                </div>
                <div className="dateHolder margin20 font-Arial fontSize20">
                    <div id="trmntDate">{currentDate}</div>
                </div>
                {
                  !isUrlHasAccount ?
                
                <table className="trnamentTble textAlignCentre font-Arial fontSize20">
                  <thead>
                    <tr>
                      <th>BlackJack Daily/Weekly</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tournament1</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>Tournament2</td>
                      <td>14</td>
                    </tr>
                    </tbody>                    
                  </table> :
                  <table className="trnamentTble textAlignCentre font-Arial fontSize20">
                    <tbody>
                      <tr>
                        <td className="pr-[10px]">01</td>
                        <td className="pr-[10px]">Blackjack Daily / Weekly</td>
                        <td className="pr-[10px]">Details</td>
                        <td>Play</td>
                      </tr>
                      <tr className="bg-gray-300">
                        <td className="pr-[10px]">19</td>
                        <td className="pr-[10px]">Blackjack Daily / Weekly</td>
                        <td className="pr-[10px]">Details</td>
                        <td>Play</td>
                      </tr>
                      <tr>
                        <td className="pr-[10px]">26</td>
                        <td className="pr-[10px]">Blackjack Daily / Weekly</td>
                        <td className="pr-[10px]">Details</td>
                        <td>Play</td>
                      </tr>
                    </tbody>
                  </table>
  }
            </div>
           <AddBanner/>
        </div>
    </section>
    )
}

export default TournamentContainer;