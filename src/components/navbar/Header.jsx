import React, {useState} from 'react';
import {FaFacebookSquare} from "@react-icons/all-files/fa/FaFacebookSquare";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaPlus} from "@react-icons/all-files/fa/FaPlus";
import {FaMinus} from "@react-icons/all-files/fa/FaMinus";
import './navbar.css';

function Header() {

    const [toggleHeader, setToggleHeader] = useState(false);

    return (<div className={`bg-[#2B3445] p-2 w-full `}>
            <div className={`md:flex flex-col lg:flex-row lg:justify-between lg:ml-16`}>
                <div className='flex flex-row'>
                    <span
                        className='ml-12 mr-2 font-bold text-[12px] text-white px-3 bg-[#D23F57] border border-5 border-[#D23F57] rounded-full'>Hot</span>
                    <p className='text-white text-[12px] flex-grow'>Free Express Shipping</p>
                    <span className='text-right lg:hidden' onClick={() => setToggleHeader(prevState => !prevState)}>
                        {!toggleHeader ? <FaPlus className='text-white'/> : <FaMinus className='text-white'/>}
                    </span>
                </div>
                <div
                    className={`flex transform transition-transform duration-300 overflow-auto ${toggleHeader ? 'scale-y-100' : 'scale-y-0 h-0'} lg:mr-16 lg:flex lg:justify-between`}>
                    <div className='flex justify-center ml-9 lg:mr-5'>
                        <select className='bg-[#2B3445] text-[12px] border-0 text-white px-3 mr-3'>
                            <option>DE</option>
                            <option>EN</option>
                        </select>
                    </div>
                    <div className='flex justify-between'>
                        <span><FaFacebookSquare className='text-white mx-2'/></span>
                        <span><FaTwitter className='text-white mx-2'/></span>
                        <span><FaInstagram className='text-white mx-2'/></span>
                    </div>
                </div>
            </div>
        </div>);
}

export default Header;