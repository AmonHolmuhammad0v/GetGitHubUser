import React from 'react';
import './aboutuser.css'
import { aboutUserLogo } from '../../assets/img/img';

const AboutUser = () => {
  return (
    <div className='aboutuser'>
      <div className='aboutuser__img'>
        <img src={ aboutUserLogo }alt="" />
        <button className='aboutuser__btn'>ПОСЕТИТЬ</button>
      </div>
      <div className='aboutuser__mainInfo'>
      <p className='aboutuser__name'>yyx990803</p>
      <div className='aboutuser__info'>
        <p className='aboutuser__main'>Репозиториев: </p>
        <p className='aboutuser__numbers'>10</p>
      </div>
      <div className='aboutuser__info'>
        <p className='aboutuser__main'>Создан: </p>
        <p className='aboutuser__numbers'>2020-01-20</p>
      </div>
      <div className='aboutuser__info'>
        <p className='aboutuser__main'>Подписщиков: </p>
        <p className='aboutuser__numbers'>1</p>
      </div>
      <div className='aboutuser__info'>
        <p className='aboutuser__main'>Подписок: </p>
        <p className='aboutuser__numbers'>1</p>
      </div>
      </div>
    </div>
  )
}

export default AboutUser