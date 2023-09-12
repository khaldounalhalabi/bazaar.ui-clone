import React, {useState} from 'react';
import './navbar.css';
import {IoMdArrowDropdown} from "@react-icons/all-files/io/IoMdArrowDropdown";

function SelectCategorySearchbar() {
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
            <div className={`text-center bg-gray-50 py-2 categories-select w-full cursor-pointer text-center relative`}
                 onClick={() => setOpen((prevState) => !prevState)}>
                <div className={`w-full text-center`}>
                    <p className={`inline-block`}>{value}</p>
                    <IoMdArrowDropdown className={`inline-block`}/>
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
}

export default SelectCategorySearchbar;