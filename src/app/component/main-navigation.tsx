
import  mainMenuItems from "../data/game-category-menu-items"
import Menu from "./menu"

export default function MainNavigation() {
    return (
             <nav className="w-[90%]">
            {/* Logo element decalration */}
            <a className="float-left mr-4" href="/">
                <img className="w-[40px] float-left align-middle" src="/assets/images/logo.png"/>
                <span className="text-[31px] md:text-[25px] font-['Castle-Tult']">GAMETOWN</span><span
                        className="font-['Castle-Tult'] text-[20px] md:text-[13px]">.US/</span> <br />
                <span className="font-['Castle-Tult'] px-[50px] md:px-0"> &nbsp; A Social Casino</span>
            </a>
        
            <nav className="pt-[14px] text-[20px] md:text-[13px] font-['Boulder-Regular'] pr-[14px] md:pr-0">
                <Menu items={mainMenuItems} menuItemClassName="tracking-widest"/>
            </nav>
        
        </nav>
    )
}