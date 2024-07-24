import React from 'react';
import styles from'./ts.module.css';
import NavBar from '@/src/components/navBar/navBar';
import Footer from '@/src/components/footer/footer';
import LadoEsquerdoTS from './ladoEsquerdo';
import LadoDireitoTS from './ladoDireito';

export default function TarefasSolicitacao() {

  return (
    <>
    <NavBar/>
    <div className={styles.containerTarefas}>
    <LadoEsquerdoTS/>
    <LadoDireitoTS/>
    </div>
    <Footer/>
    </>
  );
}

