import React, { useState, useEffect } from "react";
import styles from "./_EventsList.module.scss";
import { Link } from "react-router-dom";
import evetnsProfile from "../../../actions/EventsForProfile";
import dataNowEvents from "../../../actions/dataNowEvents";
import dataAboutFeatureEvents from "../../../actions/dataAboutFeatureEvents";
import dataAboutPastEvents from "../../../actions/dataAboutPastEvents";
import { observer, inject } from "mobx-react";

//id пользователя

const nameMonth = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const EventsList = inject("store")(
  observer(({ store }) => {
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
      const id = store.User.getIdinLocalStore();
      evetnsProfile(id).then((data) => {
        const itemList = createCards(data, store.User.decodeId());
        setFilteredCards(itemList);
      });
    }, []);

    const nowEvent = () => {
      dataNowEvents().then((data) => {
        const itemList = createCards(data, store.User.decodeId());
        const test = setFilteredCards(itemList);
      });
    };

    const featureEvent = () => {
      dataAboutFeatureEvents().then((data) => {
        const itemList = createCards(data, store.User.decodeId());
        setFilteredCards(itemList);
      });
    };

    const pastEvent = () => {
      dataAboutPastEvents().then((data) => {
        const itemList = createCards(data, store.User.decodeId());
        setFilteredCards(itemList);
      });
    };

    const userEvent = () => {
      const id = store.User.getIdinLocalStore();

      evetnsProfile(id).then((data) => {
        const itemList = createCards(data, store.User.decodeId());
        setFilteredCards(itemList);
      });
    };

    function createCards(data, id) {
      const result = data[0].map((item, index) => {
        let type = id === item["user"] ? "инициатива" : "мероприятие";
        let startDate = new Date(item["startDate"]);
        let endDate = new Date(item["endDate"]);

        let oneEvent = {
          title: item["eventTitle"],
          type: type,
          start:
            startDate.getDate() +
            " " +
            nameMonth[startDate.getMonth()] +
            " " +
            startDate.getFullYear(),
          end:
            endDate.getDate() +
            " " +
            nameMonth[endDate.getMonth()] +
            " " +
            endDate.getFullYear(),
        };
        return oneEvent;
      });

      const itemList = result.map((value, id) => {
        return (
          <div className={styles.card} key={id}>
            <span className={styles.card_title}>{value.title}</span>
            <span className={styles.card_type}>Тип: {value.type}</span>
            <span>C {value.start}</span>
            <span>По {value.end}</span>
            <Link
              className={styles.more_btn + " green_btn"}
              to="/eventCompletion"
            >
              Подробнее
            </Link>
          </div>
        );
      });

      return itemList;
    }

    return (
      <div className={styles.container}>
        <div className={styles.search}>
          <button className={styles.redButton} onClick={pastEvent}>
            Прошедшие
          </button>
          <button className={styles.yellowButton} onClick={nowEvent}>
            Сегодня
          </button>
          <button className={styles.greenButton} onClick={featureEvent}>
            Предстоящие
          </button>
          <button className={styles.blueButton} onClick={userEvent}>
            Мои
          </button>
        </div>
        {filteredCards}
      </div>
    );
  }),
);
export default EventsList;
