import React from 'react';
import styles from'./ts.module.css';
import NavBar from '@/src/components/navBar/navBar';
import Footer from '@/src/components/footer/footer';
import ladoEsquerdoTS from './ladoEsquerdo';
import ladoDireitoTS from './ladoDireito';

export default function TarefasSolicitacao() {

  return (
    <>
    <NavBar/>

    <ladoEsquerdaTS/>
    <ladoDireitoTS/>

    <Footer/>
    </>
  );
}

