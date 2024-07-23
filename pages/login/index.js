// components/Login.js

import styles from './login.module.css';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Painel do lado Esquerdo */}
      <div className={styles.painelEsquerdo}>
        <div className={styles.conteudo}>
          <h1 className={styles.marca}>LifePipe</h1>
          <div>
            <p className={styles.texto}>Ainda não possui conta?</p>
            <p className={styles.subtexto}>Faça seu cadastro agora</p>
          </div>
          <button className={styles.botaoCadastrar} onClick={() => router.push('/cadastro')}>cadastrar</button>
        </div>
      </div>

      {/* Painel do lado Direito */}
      <div className={styles.painelDireito}>
        <h1 className={styles.titulo}>Faça seu login</h1>
        <p className={styles.descricao}>Preencha seus dados</p>
        <form className={styles.formulario}>
          <div className={styles.grupoInput}>
            <span className={styles.icone}>{/*Colocar imagem de caixa de email*/}</span>
            <input type="email" className={styles.input} placeholder="Email" />
          </div>
          <div className={styles.grupoInput}>
            <span className={styles.icone}>{/*Colocar cadeado*/}</span>
            <input type="password" className={styles.input} placeholder="Senha" />
          </div>
          <button className={styles.botaoEntrar} type="submit">entrar</button>
        </form>
      </div>

    </div>
  );
}
