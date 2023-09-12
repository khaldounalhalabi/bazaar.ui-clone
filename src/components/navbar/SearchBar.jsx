import React from 'react';
import {BiSearch} from "@react-icons/all-files/bi/BiSearch.js";
import SelectCategorySearchbar from "./SelectCategorySearchbar.jsx";

const SearchBar = (props) => {
    return (
        <div className={`mx-10 ${props.className}`}>
            <div className={`p-0 searchInput grid grid-cols-9 items-center border border-gray-300`}
                 style={{padding: "0px"}}>
                <div className={`flex col-span-7 items-center`}>
                    <div><BiSearch className={`mx-1 text-xl text-gray-500`}/></div>
                    <div className={`w-full`}>
                        <input placeholder={`Search For ...`}
                               className={`outline-0 w-full py-2 border-r border-r-gray-200`}/>
                    </div>
                </div>
                <div className={`col-span-2 h-full m-0 text-center`}>
                    <SelectCategorySearchbar/>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;