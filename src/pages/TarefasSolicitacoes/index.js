import React, { useState } from 'react';
import styles from'./ts.module.css';
import NavBar from '@/src/components/navBar/navBar';
import Footer from '@/src/components/footer/footer';
import ladoDireitoTS from './ladoDireito';
import lateralEsquerdaTS from './ladoEsquerdo';

export default function TarefasSolicitacao() {

  return (
    <div>
    <NavBar/>

    <lateralEsquerdaTS/>
    <ladoDireitoTS/>

    <Footer/>
    </div>
  );
}

