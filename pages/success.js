import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Dziękujemy za zakup</h2>
        <p className="email-msg">Potwierdzenie znajdziesz na emailu.</p>
        <p className="description">
          Jeżeli masz jakieś uwagi napisz na email
          <a className="email" href=" BakeryApp@gmail.com">
            Breadly@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
          Kontynuuj zakupy
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success