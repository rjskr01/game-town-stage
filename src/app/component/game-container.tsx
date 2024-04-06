'use client';

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


type GameContainerProps = {
    isMaximized: boolean;
    onCloseClick?: () => void;
    onResizeClick?: () => void;
}

const GameContainer: React.FC<GameContainerProps> = ({ isMaximized, onCloseClick, onResizeClick }) => {

    const isGameContainerHidden = useSelector((state: RootState) => state.rootReducer.value.isHidden);

    return (
        <div id="gameContainer" className={`${isGameContainerHidden ? 'hidden' : ''} ${isMaximized ? 'absolute h-auto md:h-[calc(100vh-150px)] mx-auto w-[calc(100%-300px)] lg:w-[calc(100%-347px)]' : ''}`}>
            <div className="flex w-full text-black text-[31px] font-['Arial'] bg-white">
                <div className="flex-[9]">House Blackjack Tournament (NV)</div>
                <div className='minmaxBtn flex-[0.3] cursor-pointer text-right' onClick={onResizeClick} id="maxIcon">&#128471;&#xFE0E;</div>
                <div className='minmaxBtn flex-[0.3] cursor-pointer text-right' onClick={onCloseClick} id="closeIcon">&#128473;&#xFE0E;</div>

            </div>
            <div id="gameImgHolder" className={`${isMaximized ? 'h-[calc(100%-50px)] md:h-[calc(100%-46px)] mx-auto bg-[red]' : ''}`}>
                <img id="gameImg" className={`${isMaximized ? 'ml-[1px] md:ml-auto h-full mx-auto' : 'w-full ml-[1px] h-full'}`} src="/assets/images/game.jpg" />
            </div>
        </div>)
}

export default GameContainer;