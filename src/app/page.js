'use client';

import React, { Fragment, useEffect } from 'react';
import Beranda from '@/app/beranda';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FloatingWhatsApp } from 'react-floating-whatsapp';

import { useSelector, useDispatch } from 'react-redux';
import { getListFloatingWhatsapp } from '@/app/redux/action/floatingWhatsapp/creator';

export default function Home() {
  const floatingWhatsAppList = useSelector((state) => state.floatingWhatsapp.floatingWhatsappList);
  const dispatch = useDispatch();

  const fetchFloatingWhatsApp = async () => {
    dispatch(getListFloatingWhatsapp());
  };

  useEffect(() => {
    AOS.init();
    fetchFloatingWhatsApp();
  });

  return (
    <Fragment>
      <Beranda />

      <FloatingWhatsApp
        avatar={floatingWhatsAppList?.avatar}
        phoneNumber={floatingWhatsAppList?.phone_number}
        accountName={floatingWhatsAppList?.account_name}
        chatMessage={floatingWhatsAppList?.chat_message}
        statusMessage={floatingWhatsAppList?.status_message}
        darkMode={true}
        placeholder="Ketik pesan..."
        // allowEsc={true}
        // allowClickAway
        // notification
        // notificationDelay={60000} // 1 minute
        // notificationSound
        styles={{
          position: 'fixed',
          bottom: '15px',
          height: '0px !important',
          fontSize: '14px'
        }}
      />
    </Fragment>
  );
}
