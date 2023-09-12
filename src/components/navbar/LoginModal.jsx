import React, {useEffect, useState} from 'react';
import './../../utilities.css'
import {FcGoogle} from "@react-icons/all-files/fc/FcGoogle";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {FaEyeSlash} from "@react-icons/all-files/fa/FaEyeSlash";
import {FaEye} from "@react-icons/all-files/fa/FaEye";
import {FiX} from "@react-icons/all-files/fi/FiX";
import {useToggleAccountModal} from "./ToggleAccountModal.js";

const LoginModal = (props) => {

    const [showPassword, setShowPassword] = useState(false);
    const toggleModal = useToggleAccountModal();

    return (
        <div
            className={`z-10 ${toggleModal.open ? 'fixed' : 'hidden'} left-0 top-0 w-full h-full overflow-auto bg-[#00000066] flex justify-center items-center`}>
            <div className={`bg-white text-center w-[40%] h-full card overflow-auto`}>
                <div className={`flex justify-end`} onClick={() => toggleModal.toggle()}><i
                    className={`m-5 text-xl cursor-pointer`}><FiX/></i></div>
                <div className={`flex flex-col justify-center items-center`}>
                    <div>
                        <object data="/../src/assets/bazaar-black-sm.svg" width="65" height="65"></object>
                    </div>
                    <h1 className={`font-bold text-[#373F50]`}>Welcome To Bazaar</h1>
                </div>
                <div className={`flex flex-col w-full justify-center items-center`}>
                    <div className={`p-5 flex flex-col items-center w-full`}>
                        <label form={`email`} className={`self-start ml-[13%] text-[#373F50] text-sm font-bold`}>
                            Email or Phone Number
                        </label>
                        <input id={`email`} type={`email`} name={'email'}
                               className={`border border-gray-300 rounded-lg w-3/4 p-2 outline-0 focus:border-red-700`}
                               placeholder={`example@email.com`}/>
                    </div>

                    <div className={`p-5 flex flex-col items-center w-full relative`}>
                        <label form={`password`}
                               className={`self-start ml-[13%] text-[#373F50] text-sm font-bold`}>
                            Password
                        </label>
                        <input
                            id={`password`} type={`${showPassword ? 'text' : 'password'}`} name={'password'}
                            className={`border border-gray-300 rounded-lg w-3/4 p-2 outline-0 focus:border-red-700`}
                            placeholder={`******`}
                        />
                        <button
                            type="button"
                            className="absolute right-24 top-14"
                            onClick={() => setShowPassword(prevState => !prevState)}
                        >
                            <i className={`text-gray-600`}>{showPassword ? (<FaEyeSlash/>) : (<FaEye/>)}</i>
                        </button>
                    </div>

                    <div className={`p-5 flex flex-col items-center w-[77%]`}>
                        <button type={`submit`} value={`login`}
                                className={`bg-[#D23F57] py-3 w-full rounded-sm text-white font-bold`}>Login
                        </button>
                    </div>

                    <div className={`m-1`}>
                        <p>Or</p>
                    </div>
                    <div className={`p-2 flex flex-col items-center w-[73%]`}>
                        <button type={`submit`} value={`login`}
                                className={`bg-[#3B5998] py-3 w-full rounded-sm text-sm text-white font-bold text-center flex items-center justify-center`}>
                            <i><FaFacebook className={`text-xl mr-1`}/></i> Continue With Facebook
                        </button>
                    </div>
                    <div className={`p-2 flex flex-col items-center w-[73%]`}>
                        <button type={`submit`} value={`login`}
                                className={`bg-[#4285F4] py-3 w-full rounded-sm text-white font-bold flex items-center justify-center`}>
                            <i className={`bg-white rounded-full mr-1`}><FcGoogle className={`text-xl`}/></i>Continue
                            With Google
                        </button>
                    </div>

                    <div className={`p-4`}>
                        <p className={`mt-1`}>Don't have account ? <a className={`font-bold underline`}>Sign Up</a></p>
                    </div>
                    <div className={`p-4 bg-[#F3F5F9]  w-[70%] rounded-lg mb-5`}>
                        <p className={`mt-1`}>Forgot your password? <a className={`font-bold underline`}>Reset It</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;