import Image from "next/image";
import styles from "./cadastro.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Cadastro() {
  const router = useRouter()
  const [step, setStep] = useState(1);
  const [disable, setDisable] = useState(false)

  return (
    <div className={styles.ContainerCadastro}>
      <div className={styles.ContentRegister}>
        <h1 className={styles.TitleScreenRegister}>Crie sua conta</h1>
        <h2 className={styles.DescriptionScreenRegister}>Preencha todos os dados abaixo, as informações serão avaliadas pela nossa equipe e em breve confirmadas via E-mail em um prazo de 48 horas.</h2>

        <form className={styles.Contentform}>
          {step === 1 && (
            <>
              <div className={styles.contentinputs}>
                <input type="text" className={styles.iputsRegister} placeholder="Nome da Empresa" />
              </div>
              <div className={styles.contentinputs}>
                <input type="text" className={styles.iputsRegisterCnpj} placeholder="CNPJ" />
                <input type="text" className={styles.iputsRegisterContato} placeholder="Contato" mask={['(', /[0-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} />
              </div>
              <div className={styles.contentinputs}>
                <input type="text" className={styles.iputsRegister} placeholder="Endereço Completo" />
              </div>

              <button className={styles.ButtonRegister} onClick={() => setStep(2)}>Cadastrar</button>
            </>
          )}
          
          {step === 2 && (
            <>
            <div className={styles.success}>
              <h1 className={styles.TextRegister}>Informações enviadas com sucesso </h1>
              <FaCheckCircle  className={styles.IconRegister}/>
            </div>
            </>
                )}
        </form>

      </div>

      <div className={styles.ContentDescription}>
        <h1 className={styles.TitleRegister}>LifePipe</h1>
        <h2 className={styles.SubTitleRegister}>Já possui conta?</h2>
        <p className={styles.DescriptionText}>Não perca tempo, faça seu login e volte a usar nossos serviços.</p>
        <button className={styles.ButtonLoginRegister} onClick={() => router.push("/")}>Entrar</button>
      </div>
    </div>
  );
}