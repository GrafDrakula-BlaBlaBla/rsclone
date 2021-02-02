import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styles from './_MonthSection.module.scss';
import arrowLeft from '../../../modules/assets/green-array-left.svg';
import arrowRight from '../../../modules/assets/green-array-right.svg';

export default function MonthSection({ selectedYear, selectedMonth, setSelectedDay, monthEvents, switchMonth, selectedDay }) {
  const [eventsGrid, setEventsGrid] = useState();
  const nameMonth = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май',
    'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  const dayOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const WeekDays = dayOfWeek.map((elem, id) => <div key={ id }>{elem}</div>);

  useEffect(() => {
    function createEventsElem(gridId) {
      const eventsItems = [];
      if (monthEvents[gridId + 1]) {
        for (let i = 0; i < monthEvents[gridId + 1].length; i++) {
          const idEvent = monthEvents[gridId + 1][i].id;
          const item =
            <Link
              to = {{ pathname: "/eventInfo", hash: idEvent }}
              className={ styles.event }
              data-target={ idEvent }
              key={ idEvent }
            >
              { monthEvents[gridId + 1][i].summary }
            </Link>
          eventsItems.push(item);
        }
      }
      return gridId ? eventsItems : null;
    }

    function createGridOneMont() {
      const nowDaysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
      const firstDayForWeek = new Date(selectedYear, selectedMonth, 1);
      const nowDayOfWeek = firstDayForWeek.getDay();
      let position;
      const dataGrid = new Array(35);
      dataGrid.fill(null);
      (nowDayOfWeek !== 0) ? position = nowDayOfWeek - 1 :  position = 7 ;
      for (let i = 0; i < nowDaysInMonth; i++) {
        dataGrid[position + i] = i + 1 ;
      }
      return dataGrid;
    }

    const result = createGridOneMont().map((elem, id) => {
      return(
        <div className={ styles.day } key={id}>
          <div
            className={ selectedDay === elem ? styles.number_day + ' ' + styles.active : styles.number_day}
            onClick={ () => setSelectedDay(elem) }>{ elem }
          </div>
          {createEventsElem(elem)}
        </div>
      );
    });
    setEventsGrid(result);
  }, [monthEvents, selectedMonth, selectedYear, setSelectedDay, selectedDay]);

  return(
    <div className={ styles.wrapper }>
      <div className={ styles.head }>
        <div className={ styles.switch_month_btn } onClick={ () => switchMonth(-1) }>
          <img src={ arrowLeft } alt="arrow-left"/>
        </div>
        { nameMonth[selectedMonth] } { selectedYear }
        <div className={ styles.switch_month_btn } onClick={ () => switchMonth(1) }>
          <img src={ arrowRight } alt="arrow-right"/>
        </div>
      </div>
      <div className={ styles.week_days }>{WeekDays}</div>
      <div className={ styles.days_grid }>
        { eventsGrid }
      </div>
    </div>
  );
}