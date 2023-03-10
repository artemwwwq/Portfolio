import React from 'react';
import s from './RemoteWork.module.css'
import styleContainer from './../../common/styles/Container.module.css'

const RemoteWork = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.removeContiner}`}>
                <div className={s.continer}>
                        <h2 className={s.text}>Рассматриваю вариант удаленной работы</h2>
                    <a href="">Нанять меня</a>
                </div>

            </div>
        </div>
    );
};

export default RemoteWork;