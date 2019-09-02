import React from 'react';
import s from './SocialMediaIcons.module.css';
import insta_logo from '../../../../img/insta1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faViber } from '@fortawesome/free-brands-svg-icons'

const SocialMediaIcons = () => {
  return (
        <div className={s.social_media_icons}>
            <a target="_blank" href="https://www.instagram.com/julia.fedoruk/">
                <img src={insta_logo} alt="insta_logo"/>
            </a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100012206616585">
                <FontAwesomeIcon icon={faFacebookSquare}/>
            </a>
            <a target="_blank" href="tg://resolve?domain=julia_fedoruk">
                <FontAwesomeIcon icon={faTelegram}/>
            </a>
            <a target="_blank" href="viber://chat?number=+380687003479">
                <FontAwesomeIcon icon={faViber}/>
            </a>
        </div>
  );
}

export default SocialMediaIcons;
