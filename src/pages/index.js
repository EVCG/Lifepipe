import Image from "next/image";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
// importando o icone do biblioteca, quando vc escolher o icone e clicar nele vai dar o import e o arquvi par vc char ele
import { IoMdLock } from "react-icons/io";
import { SlEnvolope } from "react-icons/sl";


export default function Login() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      {/* Painel do lado Esquerdo */}
      <div className={styles.painelEsquerdo}>
        <div className={styles.conteudo}>
          <h1 className={styles.marca}>LifePipe</h1>
          <p className={styles.texto}>Ainda não possui conta?</p>
          <p className={styles.subtexto}>Faça seu cadastro agora</p>
          
          <button className={styles.botaoCadastrar} onClick={() => router.push('/cadastro')}>Cadastrar</button>
        </div>
      </div>

      {/* Painel do lado Direito */}
      <div className={styles.painelDireito}>
        
        <div classname={styles.tituloPrincipal}>
          <h1 className={styles.titulo}>Faça seu login</h1>
          <p className={styles.descricao}>Preencha seus dados</p>
        </div>

        <form className={styles.formulario}>
          {/*Email */}
          <div className={styles.grupoInput}>
            <div className={styles.divicone}>
            <SlEnvolope className={styles.icone}/>

            </div>
            <input type="email" className={styles.input} placeholder="Email" />
          </div>

          {/*senha */}
          <div className={styles.grupoInput}>
            <div className={styles.divicone}>
            <IoMdLock  className={styles.icone}/>
            </div>
            <input type="password" className={styles.input} placeholder="Senha" />
          </div>

          <button className={styles.botaoEntrar} type="submit">Entrar</button>
        </form>
      </div>

    </div>
  );
}
