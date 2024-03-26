
import { MenuItem } from '../model/menu-item';

const menuItems: MenuItem[] = [
    { id: 1, name: 'Profile', url: "/account/profile", type: "account", title: 'profile'},
    { id: 2, name: 'My Credit/Purchases', url: "/account/purchase", type: "account",  title: 'purchase'},
    { id: 3, name: 'My Play', url: "#", type: "account", title: 'myplay'},
    { id: 4, name: 'My Messages', url: "#", type: "account", title: 'mymessage'},
    { id: 5, name: 'MyClub/Team', url: "#", type: "account", title: 'myclub'},
    { id: 6, name: 'GamesSubmitted', url: "#", type: "account", title: 'gamesubmitted'}
];

export default menuItems;
