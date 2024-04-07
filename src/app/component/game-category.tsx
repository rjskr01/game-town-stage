"use client"
import GameCategoryMenuNavigation from "./game-category-menu-navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import HomeContainer, { IHomeContainer } from "./home";
import AccountMenu from "./account-menu";

const GameCategory: React.FC<IHomeContainer> = ({ isExistingMember }) => {
    const isMaximized = useSelector((state: RootState) => state.rootReducer.value.isMaximized);
    return (
        <div id="gameCategory" className="w-[90%] h-full  bg-white  md:mt-[0px]">
            {isExistingMember ? <div className="pt-[20px] md:pt-[4px] pl-[20px] text-black"><AccountMenu /></div> :
                <div id="gameCategoryMenu" className={`flex flex-row font-[800] text-black p-[14px] text-[13px] md:text-[11px] font-[Arial] ${isMaximized ? 'hidden' : ''}`}>
                    <div className="mr-[20px] text-[red] self-center">
                        GAME CATEGORIES:
                    </div>
                    <GameCategoryMenuNavigation />
                </div>
            }
            <HomeContainer isExistingMember={isExistingMember}></HomeContainer>
        </div>
    )
}

export default GameCategory;