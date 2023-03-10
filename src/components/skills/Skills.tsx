import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";




export const Skills = () => {
    const discript = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '                Animi impedit itaque laudantium modi quam tempore.'

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={discript}/>
                    <Skill title={'CSS'} description={discript}/>
                    <Skill title={'REACT'} description={discript}/>
                </div>
            </div>
        </div>
    );
};

