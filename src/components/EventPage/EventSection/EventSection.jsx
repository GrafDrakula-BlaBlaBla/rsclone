import React from 'react';
import styles from './_EventSection.module.scss';
import userImg from '../../../modules/assets/user.svg'
import RatingLeaves from '../../RatingLeaves/RatingLeaves';

const eventData = {
  name: 'Сбор мусора',

  ownerName: 'Ирина',

  ownerRate: 4,

  peoples: 8,

  tasks: `Пищевые отходы можно утилизировать отдельно.
    Если вы живете в городской квартире — установите
    в кухонной раковине измельчитель (диспоузер).
    Через него вместе с канализационными стоками отходы попадут
    на очистные сооружения города, а затем их превратят в
    биогаз и техногенный грунт.`,

  goals: `Разделение мусора (также раздельный сбор мусора,
    селективный сбор мусора) — практика сбора и сортировки
    мусора с учётом его происхождения и пригодности к
    переработке или вторичному использованию.
    Раздельный сбор мусора позволяет отделить
    перерабатываемые отходы от неперерабатываемых,
    а также выделить отдельные типы отходов,
    пригодные для вторичного использования.`
}

export default function EventSection () {
  return (
    <div className={ styles.main }>
      <div className={ styles.owner }>
        <div className={ styles.user_pic }>
          <img className={ styles.user_pic_img } src={ userImg } alt="user-pic"/>
        </div>
        <p className={ styles.user_name + ' font_x' }>{eventData.ownerName}</p>
        <RatingLeaves rating={ eventData.ownerRate }/>
      </div>
      <div className={ styles.tasks }>
        <p className='font_l'>Задача:</p>
        <p style={{ marginTop: 20}}>
          { eventData.tasks }
        </p>
      </div>
      <div className={ styles.goals }>
        <p className='font_l'>Цели:</p>
        <p style={{ marginTop: 20}}>
          { eventData.goals }
        </p>
      </div>
      <div className={ styles.bottom }>
        <div className={ styles.connect_block }>
          <p className='font_s' style={{ marginBottom: 20}}>С нами уже { eventData.peoples } человек</p>
          <button className='green_btn'>Присоедениться</button>
        </div>
      </div>
    </div>
  );
}