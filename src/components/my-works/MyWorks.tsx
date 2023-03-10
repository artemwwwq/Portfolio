import React from 'react';
import s from './MyWorks.module.css'
import Work from "./work/Work";

const MyWorks = () => {

    const discript = 'Lorem ipsum dolor sit amet,rem ipsum dolor sit ametrem ipsum dolor sit amet consectetur adipisicing elit.'

    return (
        <div className={s.workBlock}>
            <div className={s.workContainer}>
                <h2 className={s.title}>My Works</h2>
                <div className={s.work}>
                    <Work title={'Social Network'} description={discript}></Work>
                    <Work title={'TodoList'} description={discript}></Work>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;