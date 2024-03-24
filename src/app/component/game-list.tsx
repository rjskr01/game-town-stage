
type GameListProps = {
    items: string[]
    title: string,
    onClick?: () => void;
}

const GameList: React.FC<GameListProps> = ({items, title, onClick}) => {
    return (
        <ul className="font-extrabold pl-[20px] mb-[10px]">
            {title}
            {items.map((item, index) => (
                <li key={index} className="list-none font-normal cursor-pointer" onClick={onClick}>{item}</li>
            ))}
        </ul>
    )
}

export default GameList;