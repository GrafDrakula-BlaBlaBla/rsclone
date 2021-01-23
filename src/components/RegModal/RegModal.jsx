import React from 'react';
import './_RegModal.scss';
import vkIcon from '../../modules/assets/vk-icon.svg';
import twitterIcon from '../../modules/assets/twitter-icon.svg';
import googleIcon from '../../modules/assets/google-icon.svg';
import facebookIcon from '../../modules/assets/facebook-icon.svg';
import signInUseGoogle from './authorizationGoogle/signInUseGoogle.jsx';


export default class RagModal extends React.Component {
  state = {
    isOpen: false
  }

  clickModal(e) {
    if(e.target.className === 'reg-modal') {
      this.setState({isOpen: false});
    }
  }

  render() {
    return(
      <React.Fragment>
        <button className="reg-btn" onClick={() => this.setState({isOpen: !this.state.isOpen})}/>

        {
          this.state.isOpen && <div className="reg-modal" onClick={ (e) => this.clickModal(e) }>
            <div className="reg-modal__main">
              <div className="main-top">
                <span className="reg-modal__title">Регистрация</span>
              </div>
              <div className="main-center">
                <div className="reg-modal__social-login">
                  <img className="social-icon" src={ vkIcon } alt="vk-icon"/>
                  <img className="social-icon" src={ twitterIcon } alt="twitter-icon"/>
                  <img className="social-icon" src={ googleIcon } alt="google-icon" onClick={ signInUseGoogle }/>
                  <img className="social-icon" src={ facebookIcon } alt="facebook-icon"/>
                </div>
              <div className="reg-modal__folders">
                  <input className="reg-folder email-folder" placeholder="E-Mail"/>
                  <input className="reg-folder name-folder" placeholder="Имя"/>
                  <input className="reg-folder pass-folder" type="password" placeholder="Пароль" />
                </div>
                <div className="reg-modal__btn"><span>Присоединиться</span></div>
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}
