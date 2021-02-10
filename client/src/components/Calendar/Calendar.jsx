import React, { useState, useEffect } from 'react';
import MonthSection from './MonthSection/MonthSection'
import DaySection from  './DaySection/DaySection.jsx';
import styles from './_Calendar.module.scss';
import SectionWrapper from '../SectionWrapper/SectionWrapper';
import arrayDataAllEvents from '../../actions/arrayAllTime.jsx';

export default function Calendar() {
  const [allEvents, setAllEvents] = useState(null);
  const [selectedYear, setSelectedYear] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedDay, setSelectedDay] = useState(0);
  const [monthEvents, setMonthEvents] = useState([]);
  const [dayEvents, setDayEvents] = useState([]);
  
  useEffect(() => {
    const date = new Date();
    setSelectedYear(date.getFullYear());
    setSelectedMonth(date.getMonth());
    setSelectedDay(date.getDate());
    arrayDataAllEvents().then((data) => {
      setAllEvents(data);
    });
  }, []);

  useEffect(() => {
    if(allEvents) {
      if(allEvents[selectedYear] && allEvents[selectedYear][selectedMonth]) {
        setMonthEvents(allEvents[selectedYear][selectedMonth]);
        if(allEvents[selectedYear][selectedMonth][selectedDay]) {
          setDayEvents(allEvents[selectedYear][selectedMonth][selectedDay]);
        } else {
          setDayEvents([]);
        }
      } else {
        setMonthEvents([]);
        setDayEvents([]);
      }
    }
  }, [allEvents, selectedYear, selectedMonth, selectedDay]);

  function switchMonth(num) {
    if (num > 0) {
      if (selectedMonth === 11) {
        setSelectedYear(selectedYear + 1);
        setSelectedMonth(0);
      } else {
        setSelectedMonth(selectedMonth + 1);
      }
    } else if (num < 0) {
      if (selectedMonth === 0) {
        setSelectedYear(selectedYear - 1);
        setSelectedMonth(11);
      } else {
        setSelectedMonth(selectedMonth - 1);
      }
    }
    setSelectedDay(1);
  }

  return(
    <SectionWrapper>
      <div className={ styles.calendar } >
        <MonthSection
          selectedYear={ selectedYear }
          selectedMonth={ selectedMonth }
          setSelectedDay={ setSelectedDay }
          monthEvents={ monthEvents }
          switchMonth={ switchMonth }
          selectedDay={ selectedDay }
        />
        <DaySection
          dayEvents={ dayEvents }
          selectedYear={ selectedYear }
          selectedMonth={ selectedMonth }
          selectedDay={ selectedDay }
        />
      </div>
    </SectionWrapper>
  );
}
