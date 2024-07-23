import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div>
      Home
      <br/>
        <button onClick={() => router.push("/login")} className={styles.button}>Login</button>
        <button onClick={() => router.push("/cadastro")} className={styles.button}>Cadastro</button>
      </div>
    </>
  );
}
