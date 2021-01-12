import React, { useState } from "react";
import "./_RegModal.scss";

import Img from "./Img/Img";
import Input from "./Input/Input";

import vkIcon from "../../modules/assets/vk-icon.svg";
import twitterIcon from "../../modules/assets/twitter-icon.svg";
import googleIcon from "../../modules/assets/google-icon.svg";
import facebookIcon from "../../modules/assets/facebook-icon.svg";
import { registration } from "../../actions/users";

const RegModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const clickModal = (e) => {
    if (e.target.className === "reg-modal") {
      setIsOpen(false);
    }
  };

  return (
    <React.Fragment>
      <button className="reg-btn" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="reg-modal" onClick={(e) => clickModal(e)}>
          <div className="reg-modal__main">
            <div className="main-top">
              <span className="reg-modal__title">Регистрация</span>
            </div>
            <div className="main-center">
              <div className="reg-modal__social-login">
                <Img
                  className="social-icon vk-ikon"
                  src={vkIcon}
                  alt="vkIcon"
                />
                <Img
                  className="social-icon twitter-icon"
                  src={googleIcon}
                  alt="twitter-icon"
                />
                <Img
                  className="social-icon google-icon"
                  src={twitterIcon}
                  alt="google-icon"
                />
                <Img
                  className="social-icon facebook-icon"
                  src={facebookIcon}
                  alt="facebook-icon"
                />
              </div>
              <div className="reg-modal__folders">
                <Input
                  value={email}
                  setValue={setEmail}
                  className="reg-folder email-folder"
                  type="email"
                  placeholder="E-Mail"
                />
                <Input
                  value={name}
                  setValue={setName}
                  className="reg-folder name-folder"
                  type="text"
                  placeholder="Имя"
                />
                <Input
                  value={password}
                  setValue={setPassword}
                  className="reg-folder pass-folder"
                  type="password"
                  placeholder="Пароль"
                />
              </div>
              <div
                className="reg-modal__btn"
                onClick={() => registration(email, password)}
              >
                <span>Присоединиться</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default RegModal;

// export default class RagModal extends React.Component {
//   state = {
//     isOpen: false,
//   };

//   clickModal(e) {
//     if (e.target.className === "reg-modal") {
//       this.setState({ isOpen: false });
//     }
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <button
//           className="reg-btn"
//           onClick={() => this.setState({ isOpen: !this.state.isOpen })}
//         />
//         {this.state.isOpen && (
//           <div className="reg-modal" onClick={(e) => this.clickModal(e)}>
//             <div className="reg-modal__main">
//               <div className="main-top">
//                 <span className="reg-modal__title">Регистрация</span>
//               </div>
//               <div className="main-center">
//                 <div className="reg-modal__social-login">
//                   <img className="social-icon" src={vkIcon} alt="vk-icon" />
//                   <img
//                     className="social-icon"
//                     src={twitterIcon}
//                     alt="twitter-icon"
//                   />
//                   <img
//                     className="social-icon"
//                     src={googleIcon}
//                     alt="google-icon"
//                   />
//                   <img
//                     className="social-icon"
//                     src={facebookIcon}
//                     alt="facebook-icon"
//                   />
//                 </div>
//                 <div className="reg-modal__folders">
//                   <input
//                     className="reg-folder email-folder"
//                     type="email"
//                     placeholder="E-Mail"
//                   />
//                   <input
//                     className="reg-folder name-folder"
//                     type="text"
//                     placeholder="Имя"
//                   />
//                   <input
//                     className="reg-folder pass-folder"
//                     type="password"
//                     placeholder="Пароль"
//                   />
//                 </div>
//                 <div className="reg-modal__btn">
//                   <span>Присоединиться</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </React.Fragment>
//     );
//   }
// }
