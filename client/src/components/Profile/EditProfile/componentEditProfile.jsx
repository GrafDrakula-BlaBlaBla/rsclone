import React, { useEffect, useState } from 'react';
import './../_Profile.scss';
import styles from './_EditProfile.scss';
import { observer, inject } from "mobx-react";
import byCities from "../../../modules/data/by-cities";

const EditProfile = inject( "store" ) (observer( ({store}) => {
  useEffect(() => {

    store.User.getIdinLocalStore();
    store.User.getValue(store.User.id);

  }, [ store.User ])


  const city = byCities['regions'][0]['cities'].map(( item, index ) => {
    return <option value={index} key={"region" +index}> {item.name} </option>
  })



const [region, setRegion] = useState(0);
const [cities, setСities] = useState(city);

useEffect(() => {

  function creteCities(i) {

    const city = byCities['regions'][i]['cities'].map(( item, index ) => {
      return <option value={index} key={"region" +index}> {item.name} </option>
    })

    return city;
  }

setСities(creteCities(region))
}, [ region ])

function onloadFile() {

}


  return (
    <div className="profile-page">
      <div className="events-history">
            <div className="sex-user">
              <p>Пол</p>
              <select>
                <option>не выбран</option>
                <option>женский</option>
                <option>мужской</option>
              </select>
            </div>
            <div className="location-block-user">
              <div className="location-user">
                <p>Область</p>
                <select onChange={(e) => setRegion(e.target.value) }
                >
                {
                  byCities['regions'].map(( item, index ) => {
                    return <option value={index} key={"region" +index}> {item.name} </option>
                  })
                }
                </select>
              </div>
              <div className="location-user">
                <p>Город</p>
                <select>
                { cities }
                </select>
              </div>
            </div>
            <div className="contacts-user">
              <p>Контакты</p>
              <div className="contacts-icon">
                <div><i class="fa fa-paper-plane" aria-hidden="true"></i><input type="text" size="40"/></div>
                <div><i class="fa fa-instagram" aria-hidden="true"></i><input type="text" size="40"/></div>
                <div><i class="fa fa-youtube-play" aria-hidden="true"></i><input type="text" size="40"/></div>
                <div><i class="fa fa-twitter" aria-hidden="true"></i><input type="text" size="40"/></div>
                <div><i class="fa fa-vk" aria-hidden="true"></i><input type="text" size="40"/></div>
                <div><i class="fa fa-facebook-official" aria-hidden="true"></i><input type="text" size="40"/></div>
              </div>
              <button className="button-contacts-user"><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            <div className="change-pic">
            <p>Сменить фото</p>
              <div style={styles}>
                <label className="custom-file-upload" >
                  <input type="file" accept="image/*" onChange={onloadFile} />
                  <i className="fa fa-cloud-upload" aria-hidden="true" /> Загрузить
                </label>
                </div>
            </div>
            <div>
              <button className="button-save green_btn">Сохранить</button>
            </div>
          </div>
    </div>
    );
  })
)
export default EditProfile;
