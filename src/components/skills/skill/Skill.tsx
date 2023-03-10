import React from 'react';
import s from './Skill.module.css'

type SkillTypeProps = {
    title: string
    description: string
}

export const Skill = (props: SkillTypeProps) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
};

