'use client'

import { useSelector, useStore } from "react-redux";
import AddBanner from "./add-banner";
import DropDownList from "./drop-down-list";
import TournamentHeader from "./tournament-header";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import stateItems from "../data/state-items";

const TournamentContainer = () => {

  const isMaximized = useSelector((state: RootState) => state.rootReducer.value.isMaximized);
  const [isUrlHasAccount, setIsUrlHasAccount] = useState(false);


  useEffect(() => {
    const urlHasAccount = window.location.href.includes("account");
    setIsUrlHasAccount(urlHasAccount);
  }, [])


  let currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  currentDate = currentDate.replace(/\//g, "-");

  const onEventTitleClick = () => {

  }
  return (
    <section className="trnmntaddSectionCls flex-[40%] self-stretch">
      {/* <TournamentHeader/>
            <div id="trmntLstHdr" className="mt-[60px] text-[30px] md:text-[18px] w-[55%] text-center font-['Arial, Helvetica, sans-serif']">TOURNAMENT LISTING</div> */}
      <div id='trnmtLstnHolder' className="w-[90%] flex bg-white h-full text-[black] mb-5">
        <div id="trnmtdtsHdr" className={`flex-[2] ${isMaximized ? 'invisible' : ''}`}>
          <div className="w-full m-auto text-center mt-[20px]">

            <select className="border-none p-[0.75rem] text-[20px] md:text-[15px] cursor-pointer" defaultValue={"NV"}>
              {
                stateItems.map((item, index) => {
                  return (
                    <option key={index} value={item.key}>{item.value}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="flex justify-around font-bold text-[20px] font-['Arial']">
            <a id="houseEvent" onClick={onEventTitleClick} href="#">HOUSE EVENTS</a>
            <a id="clubEvent" onClick={onEventTitleClick} href="#">CLUB EVENTS</a>
          </div>
          <div className="dateHolder margin20 font-Arial fontSize20">
            <div className="font-[800]" id="trmntDate">{"October"}</div>
          </div>
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

          <div className="dateHolder margin20 font-Arial fontSize20">
            <div className="font-[800]" id="trmntDate">{"November"}</div>
          </div>
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


          <div className="dateHolder margin20 font-Arial fontSize20">
            <div className="font-[800]" id="trmntDate">{"December"}</div>
          </div>
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
        </div>
        <AddBanner />
      </div>
    </section>
  )
}

export default TournamentContainer;