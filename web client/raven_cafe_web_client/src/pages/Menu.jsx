import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateNavIndex } from '../services/navIndexSlice';

const MenuBord = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateNavIndex(2));
    }, []);

    return (
        <div className="menuContainer">
            this is the menu page
        </div>
    );
};

export default MenuBord;