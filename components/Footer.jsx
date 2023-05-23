import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="icons">
        <a href="https://instagram.com/"><AiFillInstagram /></a>
        <a href="https://twitter.com/"><AiOutlineTwitter /></a>
        <a href="https://Facebook.com/"><AiFillFacebook /></a>
      </p>
    </div>
  )
}

export default Footer