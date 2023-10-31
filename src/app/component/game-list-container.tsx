import { useSelector } from "react-redux";
import { videoPokerItems, videoEZPokerItems, oneOnOnePokerItems } from "../data/game-items";
import GameList from "./game-list";
import { RootState } from "@/redux/store";

interface GameListContainerProps {
    onClick?: () => void;
}

const GameListcontainer: React.FC<GameListContainerProps> = ({ onClick }) => {

    const isGameListContainerHidden = useSelector((state: RootState) => !state.rootReducer.value.isHidden);

    return (

        <div id="gameListContainer" className={`flex flex-row my-[20px] mx-[20px] ${isGameListContainerHidden ? 'hidden' : ''}`}>
            <div className="flex-1 text-black font-['Arial'] text-[12px] md:text-[14px]">
                <div className="flex items-center">
                    <img src="assets/images/jack-trans.png" className="w-[50px]" />
                    <div className="text-[red] font-extrabold">HOUSE GAMES</div>
                </div>
                <GameList items={videoPokerItems} title="Video Poker" />
                <GameList items={videoEZPokerItems} title="Video Poker" />
                <GameList items={oneOnOnePokerItems} title="Video Poker" />
            </div>
            <div className="flex flex-1 justify-center flex-row flex-wrap gameListCls gameListImgCls">
                <img onClick={onClick} src="assets/images/games/minitex.png" />
                <img onClick={onClick} src="assets/images/games/doubleshot.png" />
                <img onClick={onClick} src="assets/images/games/texround.png" />
                <img onClick={onClick} src="assets/images/games/headsup.png" />
                <img onClick={onClick} src="assets/images/games/xtraplay.png" />
            </div>
        </div>
    )
}

export default GameListcontainer;