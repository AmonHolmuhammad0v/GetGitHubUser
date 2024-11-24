import React from 'react';
import s from './usersinfo.module.scss'

const UsersInfoItem = () => {
  return (
    <div className={s.usersitem}>
        <div className={s.usersitem__info}>
            <h2 className={s.usersitem__title}>VUE</h2>
            <div className={s.usersitem__mainInfo}>
                <p className={s.usersitem__subInfo}>Кол-во звёзд: </p>
                <p className={s.useritem__numbers}>0</p>
            </div>
            <div className={s.usersitem__mainInfo}>
                <p className={s.usersitem__subInfo}>Дата добавления:  </p>
                <p className={s.useritem__numbers}>2022-05-30</p>
            </div>
        </div>
            <button className={s.usersitem__btn}>ПОСЕТИТЬ</button>  

    </div>
  )
}

export default UsersInfoItem