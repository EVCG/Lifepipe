import styles from './pop-up-new-card.module.css';
import { useRouter } from 'next/router';

export default function PopUpNewCard({ setPopUpCard }) {
  const router = useRouter();

  return (

    <div className={styles.popUpContainerNewCard}>
      <div className={styles.popUpoContantNewCard}>
        <div className={styles.ExitPopUpNewCard} onClick={() => setPopUpCard(false)}>X</div>

        <form className={styles.ContainerFormPopUpNewCard}>
          <h1 className={styles.TitlePopUpNewCard}>Crie seu Card</h1>

          <div className={styles.ContainerInputsPopUpNewCard}>
            <label className={styles.labelPopUpNewCard}>Nome Do Card:</label>
            <input type='text' className={styles.InputPopUpNewCard} />
            <label className={styles.labelPopUpNewCard}>Logo Do Card:</label>
            <input type='text' className={styles.InputPopUpNewCard} />
          </div>

          <button className={styles.ButtonPopUpNewCard} type='submit' onClick={(e) => {e.preventDefault(); }}>Salvar</button>
        </form>

      </div>
    </div>

  );
}
