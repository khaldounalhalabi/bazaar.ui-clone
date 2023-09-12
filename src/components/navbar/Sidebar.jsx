import React, {useState} from 'react';
import {IoIosArrowDown} from "@react-icons/all-files/io/IoIosArrowDown";
import {FiX} from "@react-icons/all-files/fi/FiX";
import './navbar.css';
import {useToggleSidebar} from './ToggleSidebar.js';
import {data} from "./MegaMenu.js";

const Sidebar = () => {
    let toggleSidebar = useToggleSidebar();
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (itemId) => {
        setOpenMenus((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId],
        }));
    };

    return (
        <div
            className={`bg-white w-full h-full absolute z-10 left-[-1000px] ${toggleSidebar.open ? "slide-right" : 'slide-left'} lg:hidden`}>
            <div className={`float-right text-lg mr-36 mt-5`}>
                <span><FiX onClick={() => toggleSidebar.toggle()}/></span>
            </div>
            <div className={`flex flex-col justify-center mx-36 text-sm text-gray-600 font-normal  mt-10`}>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <div onClick={() => toggleMenu(item.id)}
                                 className={`mt-5 flex flex-grow items-center justify-between font-bold`}>
                                <h3 className={`${openMenus[item.id] && 'text-hover-color'}`}>{item.name}</h3>
                                <span
                                    className={`transform ${openMenus[item.id] ? 'rotate-180' : 'rotate-0'}`}
                                >
                                    <IoIosArrowDown/>
                                </span>
                            </div>
                            {item.subs && item.subs.length > 0 && (
                                <div
                                    className={`mx-5 my-2 overflow-auto transition-max-height ease-in-out duration-300 ${openMenus[item.id] ? 'max-h-96' : 'max-h-0'}`}
                                >
                                    <ul>
                                        {(item.subs).map((sub) => {
                                            return (
                                                <div key={sub.id}>
                                                    <li className={`my-2 font-semibold flex justify-between items-center`}
                                                        onClick={() => toggleMenu(sub.id)}
                                                    ><span className={`${openMenus[sub.id] && 'text-hover-color'}`}>{sub.name}</span>
                                                        {
                                                            sub.subs && sub.subs.length > 0
                                                            &&
                                                            (<span><IoIosArrowDown/></span>)
                                                        }
                                                    </li>
                                                    {sub.subs && sub.subs.length > 0 && (
                                                        <div
                                                            className={`mx-5 my-2 overflow-auto transition-max-height ease-in-out duration-300 ${openMenus[sub.id] ? 'max-h-96' : 'max-h-0'}`}>
                                                            <ul>
                                                                {(sub.subs).map((nestedItem) => {
                                                                    return (
                                                                        <li key={nestedItem.id}
                                                                            className={'my-2 font-semibold'}>{nestedItem.name}</li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
