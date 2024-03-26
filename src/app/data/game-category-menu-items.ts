
import { MenuItem } from '../model/menu-item';

const gameCategoryMenuItems: MenuItem[] = [
    { id: 1, name: 'POKER', url: "/game?subpage=game", type: "game", title: 'poker'},
    { id: 2, name: 'BLACKJACK', url: "#", type: "game", title: 'blackjack'},
    { id: 3, name: 'BACCARAT', url: "#", type: "game", title: 'baccarat'},
    { id: 4, name: 'ROULETTE', url: "#", type: "game", title: 'roulette'},
    { id: 5, name: 'WAR', url: "#", type: "game", title: 'war'},
    { id: 6, name: 'KENO', url: "#", type: "game", title: 'keno'},
    { id: 7, name: 'SLOT', url: "#", type: "game", title: 'slot'},
    { id: 8, name: 'PLUS', url: "#", type: "game", title: 'plus'}
];

export default gameCategoryMenuItems;
