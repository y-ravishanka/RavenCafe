import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateNavIndex } from '../services/navIndexSlice';

const FeedBack = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateNavIndex(5));
    }, []);

    return (
        <div className="feedbackContainer">
            this is the feedback page
        </div>
    );
};

export default FeedBack;