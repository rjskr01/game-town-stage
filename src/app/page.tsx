import GameCategory from "./component/game-category"
import TournamentContainer from "./component/tournament-container"

export default function Home() {
    return (
      <main className="">
        <div className="flex flex-row">
          <section className="flex-[60%] ml-[50px]">
            <GameCategory/>
          </section>
        <TournamentContainer/>
        </div>
      </main> 
    )
  }