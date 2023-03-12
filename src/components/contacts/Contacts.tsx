import React from 'react';
import styleContainer from './../../common/styles/Container.module.css'
import s from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.ContentContainer}>
                <h2>Contacts</h2>
                <div className={s.content}>
                        <form className={s.form}>
                            <label className={s.form}>
                                <input type="text" name="name" />
                                <input type="text" name="name" />
                                <textarea name="" id=""></textarea>
                            </label>
                            <input type="submit" value="Отправить" />
                        </form>
                </div>

            </div>

        </div>
    );
};

export default Contacts;