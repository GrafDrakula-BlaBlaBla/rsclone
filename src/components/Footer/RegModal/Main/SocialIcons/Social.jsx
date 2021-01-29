import React from "react";

import Img from "../../Img/Img";

import "./_Social.scss";

import vkIcon from "../../../../../modules/assets/vk-icon.svg";
import twitterIcon from "../../../../../modules/assets/twitter-icon.svg";
import googleIcon from "../../../../../modules/assets/google-icon.svg";
import facebookIcon from "../../../../../modules/assets/facebook-icon.svg";

const Social = () => {
  return (
    <div className="reg-modal__social-login">
      <Img className="social-icon vk-ikon" src={vkIcon} alt="vkIcon" />
      <Img
        className="social-icon google-icon"
        src={twitterIcon}
        alt="google-icon"
      />
      <Img
        className="social-icon google-icon"
        src={googleIcon}
        alt="google-icon"
      />
      <Img
        className="social-icon facebook-icon"
        src={facebookIcon}
        alt="facebook-icon"
      />
    </div>
  );
};

export default Social;
