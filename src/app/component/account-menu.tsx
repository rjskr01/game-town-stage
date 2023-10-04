import Menu from "./menu";
import  menuItems  from "../data/account-menu-items";

const AccountMenu = () => {
    return (
        <nav className="">
            <Menu items={menuItems} menuItemClassName="active:text-[red] focus:text-[red] hover:text-[red] active:underline focus:underline hover:underline"/>
        </nav>
    )
}

export default AccountMenu;
