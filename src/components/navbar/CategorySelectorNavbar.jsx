import React from 'react';
import {useState} from "react";
import {RiApps2Fill} from "@react-icons/all-files/ri/RiApps2Fill";
import {BsChevronRight} from "@react-icons/all-files/bs/BsChevronRight";
import {BiChevronRight} from "@react-icons/all-files/bi/BiChevronRight";

const CategorySelectorNavbar = () => {
    let categories = [
        {name: "All Categories", value: "all categories", id: 1},
        {name: "Car", value: "car", id: 2},
        {name: "Clothes", id: 3, value: "clothes"},
        {name: "Electronics", id: 4, value: "electronics"},
        {name: "Laptop", id: 5, value: "laptop"},
        {name: "Desktop", id: 6, value: "desktop"},
        {name: "Camera", id: 7, value: "camera"},
        {name: "Toys", id: 8, value: "toys"},
    ];

    let [value, setValue] = useState(categories[0].name);
    let [open, setOpen] = useState(false);

    const select = (id) => {
        let selectedCategory = categories.find(category => category.id === id);
        setValue(selectedCategory.name);
    }

    return (
        <>
            <div className={`mb-2 text-center bg-gray-50 py-2 w-full cursor-pointer text-center relative`}
                 onClick={() => setOpen((prevState) => !prevState)}>
                <div className={`w-full text-center flex items-center justify-between`}>
                    <div className={`flex items-center`}>
                        <span className={`inline-block mr-2`}><RiApps2Fill/></span>
                        <p className={`inline-block font-bold text-gray-400`}>{value}</p>
                    </div>
                    <span className={`text-[20px]`}><BiChevronRight style={{color:"#2B3445 !important"}}/></span>
                </div>
                <div className={`${open ? 'absolute scale-up-top' : 'hidden fadeOut'} top-10 w-[150px] shadow-2xl`}>
                    <ul className={`bg-white`}>
                        {categories.map((category) => {
                            return (
                                <li className={`p-2 border border-white cursor-pointer hover:bg-gray-100`}
                                    key={category.id} onClick={() => select(category.id)}>
                                    {category.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CategorySelectorNavbar;