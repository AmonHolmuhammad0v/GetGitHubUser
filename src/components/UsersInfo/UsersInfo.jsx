import React from 'react';
import s from './usersinfo.module.scss';
import UsersInfoItem from './UsersInfoItem';

const UsersInfo = () => {
  return (
    <div className={s.usersinfo}>
        <UsersInfoItem/>
        <UsersInfoItem/>
    </div>
  )
}

export default UsersInfo