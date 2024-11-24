import React, { useState } from 'react';
import s from './searchuser.module.scss';
import { createLogger } from 'vite';

const SearchUser = () => {
  
  const [getUser, setGetUser] = useState('')

  return (
    
        <div className={s.entering}>
        <input 
        type="text" 
        placeholder='Введите имя пользователя' 
        className={s.entering__input}
        onChange={(event)=>{console.log('a');}}
        />
        <button className={s.entering__btn}>НАЙТИ</button>
        </div>
        

  )
}

export default SearchUser