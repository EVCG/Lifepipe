import styles from './pop-up.module.css';
import { useRouter } from 'next/router';


export default function PopUpSupport({ setPopUp }) {
  const router = useRouter();

  return (
    <div className={styles.popUpContainer}>
      <div className={styles.popUpoContant}>
        <div className={styles.ExitPopUpSupport}onClick={() => setPopUp(false)}>X</div>

        <form className={styles.ContainerFormPopUp}>
          <h1 className={styles.TitlePopUpSuppor}>Relate Sua duvida</h1>

          <div className={styles.ContainerInputsPopUp}>
            <label className={styles.labelPopUpSupport}>Problema:</label>
            <input type='text' className={styles.InputPopUpSuppor} />
            <label className={styles.labelPopUpSupport}>Descrição do Problema:</label>
            <textarea  type='text' className={styles.InputPopUpSuppor} />
            <label className={styles.labelPopUpSupport}>Print do Erro:</label>
            <input type="file"  className={styles.InputImagePopUp}/>
          </div>

          <button className={styles.ButtonPopUpSuppor} type='submit' onClick={(e) => {e.preventDefault(); }}>Enviar</button>
        </form>

      </div>
    </div>
  );
}
