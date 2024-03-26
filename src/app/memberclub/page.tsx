'use client'

import { useEffect, useState } from "react";
import TournamentContainer from "../component/tournament-container";
import stateItems from "../data/state-items";
import Clubs from "../component/clubs";
import Members from "../component/members";

const MemberClub = () => {

    const [isMember, selectMember] = useState(true)
    const onHeaderClick = (param: string) => {
        if (param == 'members')
            selectMember(true);
        else
            selectMember(false)
    }

    return (
        <div className="flex flex-row min-w-screen">
            <div className="flex-[60%] ml-[50px]">
                <div className="w-[90%] h-auto md:h-[calc(100vh-150px)] bg-white mt-[20px] md:mt-[0px] pt-[20px] md:pt-[4px] pl-[20px] text-black">
                    {/* <AccountMenu/> */}
                    {/* <Purchase/> */}
                    <div className="mt-[30px] flex columns-[50px]">
                        <div className="text-[green] font-[800] text-[20px]">MEMBERS</div>
                        <div>
                            <ul className="flex flex-wrap w-[60%] gap-x-[20px] text-[17px] justify-center">
                                <li> 411 State Members</li>
                                <li> 379 Public in State</li>
                                <li> 34 County Members</li>
                                <li> 31 Public in County</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-[20px]">
                        <ul className="flex justify-around">
                            <li className={`font-[800] ${isMember ? 'underline' : ''}`} onClick={() => onHeaderClick('members')}>INDIVIDUALS</li>
                            <li className={`font-[800] ${isMember ? '' : 'underline'}`} onClick={() => onHeaderClick('clubs')}>CLUBS</li>
                            <li>
                                <select>
                                    {
                                        stateItems.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key} selected={item.key === 'NV'}>{item.value}</option>
                                            )
                                        })
                                    }
                                </select>
                            </li>
                            <li>
                                <select>
                                    {/* {
                                        stateItems.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key} selected={item.key === 'NV'}>{item.value}</option>
                                            )
                                        })
                                    } */}
                                    <option>County</option>
                                </select>
                            </li>
                        </ul>

                        {isMember ? <Members></Members> :
                            <Clubs></Clubs>}
                    </div>
                </div>

            </div>
            <TournamentContainer />
        </div>


    )
}

export default MemberClub;