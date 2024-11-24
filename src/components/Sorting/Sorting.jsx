import React from 'react'
import s from './sorting.module.scss'

const Sorting = () => {
  return (
    <div className={s.sorting}>
      <h2 className={s.sorting__title}>Сортировка</h2>
      <ul className={s.sorting__menu}>
        <li className={s.sorting__item}><button className={s.sorting__btn}>Имя</button></li>
        <li className={s.sorting__item}><button className={s.sorting__btn}>Звезды</button></li>
        <li className={s.sorting__item}><button className={s.sorting__btn}>Дата</button></li>
      </ul>
    </div>
  )
}

export default Sorting