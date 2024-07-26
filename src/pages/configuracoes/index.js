import React from 'react';
import styles from './configuracao.module.css';
import NavBar from '@/src/components/navBar/navBar';
import Footer from '@/src/components/footer/footer';
import Image from "next/image";
import perfil from "@/src/image/perfil.png";

export default function Configuracao() {

  return (
    <>
      <NavBar />
      <div className={styles.ContainerSettings}>

        <div className={styles.contentProfile}>
          <h1 className={styles.TitleSettings}>Geral</h1>
          <h2 className={styles.subTitlesettings}>Informações gerais do seu perfil</h2>
          
          <div className={styles.DivSettingsPerfil}>
            <Image src={perfil} className={styles.Imagesettings} alt='Foto de perfil'/>
            <div className={styles.ImagePerfilSettings}>
              <p className={styles.subTitlesettings}>Imagem de perfil</p>
              <input type='file' />
            </div>
          </div>
        </div>

        <div className={styles.SettingsProfile}>
          <form className={styles.FormsSettings}>

            <div className={styles.DivInputsSettings}>
               <label className={styles.subTitlesettings}>Nome</label>
              <input type='text'  className={styles.InputSetting} placeholder='Nome Completo'/>
            </div>

             <div className={styles.DivInputsSettings}>
               <label className={styles.subTitlesettings}>Usuário</label>
              <input type='text'  className={styles.InputSetting} placeholder='Nome de Usuário'/>
            </div>
             <div className={styles.DivInputsSettings}>
               <label className={styles.subTitlesettings}>Email</label>
              <input type='text'  className={styles.InputSetting} placeholder='xxxxxxxxx@gmail.com'/>
            </div>
             <div className={styles.DivInputsSettings}>
               <label className={styles.subTitlesettings}>Idioma</label>
              <input type='text'  className={styles.InputSetting} placeholder='Português (BR) - Português (BR)'/>
            </div>
             <div className={styles.DivInputsSettings}>
               <label className={styles.subTitlesettings}>Fuso horário</label>
              <input type='text'  className={styles.InputSetting} placeholder='(GMT - 03:00) Brazil/East'/>
            </div>
             <div className={styles.DivInputsSettings}>
              <label className={styles.subTitlesettings}>Senha</label>
              <input type='password'  className={styles.InputSetting} placeholder='****************'/>
              <button className={styles.ButtonSavePassword}  onClick={(e) => {e.preventDefault(); }}>Salvar senha</button>
            </div>
            <div className={styles.DivInputsSettings}>
            <button className={styles.ButtonSave}  onClick={(e) => {e.preventDefault(); }}>Salvar alterações</button>
            </div>

          </form>

        </div>


      </div>
      <Footer />
    </>
  );
}