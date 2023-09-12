import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu";
import {BiShoppingBag} from "@react-icons/all-files/bi/BiShoppingBag";
import {BiSearch} from "@react-icons/all-files/bi/BiSearch";
import {BiUser} from "@react-icons/all-files/bi/BiUser";
import {FiX} from "@react-icons/all-files/fi/FiX";
import LoginModal from "./LoginModal.jsx";
import SearchBar from "./SearchBar.jsx";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import {useState} from "react";
import './navbar.css';
import {useToggleSidebar} from "./ToggleSidebar.js";
import {useToggleAccountModal} from "./ToggleAccountModal.js";
import CategorySelectorNavbar from "./CategorySelectorNavbar.jsx";

const Navbar = () => {

    let [toggleSearch, setToggleSearch] = useState(false);
    let toggleSidebar = useToggleSidebar();
    let toggleAccountModal = useToggleAccountModal();

    return (
        <>
        <div
            className={`bg-white fixed top-[-100px] ${(toggleSearch) ? 'slide-bottom' : 'slide-top'} w-full h-full z-10 lg:hidden`}>
            <div className={`flex justify-between`}>
                <div><p className={`text-sm text-gray-500 mx-5 my-3`}>Search to Bazaar</p></div>
                <FiX className={'text-2xl mx-5 my-3'} onClick={() => setToggleSearch(prevState => !prevState)}/>
            </div>
            <div className={`my-3 flex justify-center items-center w-full`}>
                <SearchBar className={`flex w-full`}/>
            </div>
        </div>
        <Sidebar/>
        <Header/>
        <div className={`border-b-2 w-full flex flex-col`}>
            <div className="bg-white flex flex-row justify-between items-center mx-5 lg:mx-28">
                <div className="lg:hidden">
                    <button><AiOutlineMenu className={`font-bold text-2xl`} onClick={() => toggleSidebar.toggle()}/>
                    </button>
                </div>
                <div className="hidden lg:block">
                    <object data="/../src/assets/logo2.svg" width="90" height="90"></object>
                </div>
                <div className="lg:hidden">
                    <object data="/../src/assets/bazaar-black-sm.svg" width="50" height="50"></object>
                </div>
                <SearchBar className={`hidden lg:flex w-full mx-40`}/>
                <div>
                    <ul className={`flex justify-between`}>
                        <li><BiSearch className={`text-[#7D879C] text-2xl lg:hidden cursor-pointer`}
                                      onClick={() => setToggleSearch(prevState => !prevState)}/></li>
                        <li onClick={() => toggleAccountModal.toggle()}><BiUser
                            className={`text-[#7D879C] text-2xl mx-3 lg:rounded-full lg:bg-[#F5F5F5] lg:text-[#707173] lg:text-3xl cursor-pointer`}/>
                        </li>
                        <li className="relative">
                            <BiShoppingBag
                                className={`text-[#7D879C] text-2xl lg:rounded-full lg:bg-[#F5F5F5] lg:text-[#707173] lg:text-3xl cursor-pointer`}/>
                            <span className="absolute top-[-8px] right-[-8px] w-5 h-5 cursor-pointer
                                 bg-[#D23F57] text-white rounded-full flex items-center justify-center text-sm">30</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`md:hidden lg:flex w-full justify-between items-center mx-5 lg:mx-28`}>
                <div className={`w-1/6`}><CategorySelectorNavbar/></div>
            </div>
        </div>
        <LoginModal show={toggleAccountModal}/>
    </>);
}

export default Navbar;