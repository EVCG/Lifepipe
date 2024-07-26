import { useState } from 'react';
import styles from './popUpNotification.module.css';

export default function PopUpNotification() {
  const [NotificationData , setNotificationData] = useState([
    {id: 1, data: " Área de acesso restrito. Autorização prévia necessária." , date: "12/12/2024"},
    {id: 2, data: " Este local está sob vigilância por vídeo 24 horas por dia.", date: "16/08/2024"},
    {id: 3, data: " É obrigatório o uso de equipamento de proteção individual nesta área.", date: "26/03/2024"},
    {id: 4, data: " Mantenha distância de segurança das máquinas em operação.", date: "31/09/2024"},
    {id: 5, data: " Todos os visitantes devem se registrar na recepção.", date: "01/12/2022"},
    {id: 6, data: " Este local está sob vigilância por vídeo 24 horas por dia.", date: "16/08/2024"},
    {id: 7, data: " É obrigatório o uso de equipamento de proteção individual nesta área.", date: "26/03/2024"},
    {id: 8, data: " Este local está sob vigilância por vídeo 24 horas por dia.", date: "16/08/2024"},
    {id: 9, data: " É obrigatório o uso de equipamento de proteção individual nesta área.", date: "26/03/2024"},
    
  ])

  return (
    <div className={styles.containerNotification}>
        <div className={styles.contentNotification}>
            {NotificationData . map((msg)=> <div key={msg.id} className={styles.Notification}><p>{msg.data}</p> <p>{msg.date}</p></div>)}
        </div>
    </div>
  );
}