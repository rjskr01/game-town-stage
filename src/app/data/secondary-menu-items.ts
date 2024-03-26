
import { MenuItem } from '../model/menu-item';

const menuItems: MenuItem[] = [
    { id: 1, name: 'Home', url: "/" , type: "main" , title : 'home' },
    { id: 2, name: 'My Account', url: "/account/purchase", type: "main", title : 'account' },
    { id: 3, name: 'House Events', url: "#", type: "main" , title : 'houseevents' },
    { id: 4, name: 'Club Events', url: "#", type: "main" , title : 'clubevents' },
    { id: 5, name: 'Members/Clubs', url: "/memberclub", type: "main" , title : 'memberclub' },
    { id: 6, name: 'Tournament Scores', url: "#" , type: "main" , title : 'tournamentscores' },
    { id: 7, name: 'Store', url: "#" , type: "main" , title : 'store' },
    { id: 8, name: 'Help', url: "#" , type: "main" , title : 'home' },
];

export default menuItems;
