import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateNavIndex } from '../services/navIndexSlice';

const BlogHome = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateNavIndex(3));
    }, []);

    return (
        <div className="bolghomeContainer">
            this is the blog home page
        </div>
    );
};

export default BlogHome;