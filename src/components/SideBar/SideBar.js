import styles from './sideBar.module.css';
import { useRouter } from 'next/router';
import { FaHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import PerfilEmpresa from "@/src/image/logoEmpresarial.png";
import Image from "next/image";
import { useState } from 'react';
import PopUpMember from '../PopUps/pop-up-member/popUpMember';

export default function SideBar() {
  const router = useRouter();
  const [PopMember , setPopMember] =  useState(false);

  return (
    <div className={styles.ContainerSideBar}>
      {PopMember ? <PopUpMember setPopMember={setPopMember}/> : <></>}
      <div className={styles.contentLogoCompany}>
      <Image src={PerfilEmpresa} width={75} height={75} alt='iamgem de perfil' className={styles.ImageLogoSideBar}/>
        <p className={styles.titleCompany}>Enterprise </p>
      </div>
      <div className={styles.LineSideBar}/>

      <div className={styles.contentIconSideBar} onClick={() => setPopMember(true)}>
      <IoPersonSharp size={20}/>
        <p className={styles.TitleButtons}>Membros</p>
      </div>
      <div className={styles.contentIconSideBar} onClick={() => router.push('chat')}>
      <IoIosChatbubbles size={20}/>
        <p className={styles.TitleButtons}>Chat</p>
      </div>
      <div className={styles.contentIconSideBar} onClick={() => router.push('configuracoes')}>
      <IoSettings size={20}/>
        <p className={styles.TitleButtons}>Configurações</p>
      </div>
      <div className={styles.contentIconSideBar} onClick={() => router.push('notificacoes')}>
      <IoMdNotifications size={20}/>
        <p className={styles.TitleButtons}>Notificações</p>
      </div>

    </div>
  );
}
