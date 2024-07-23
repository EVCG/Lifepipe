import styles from './home.module.css';
import { useRouter } from 'next/router';
import NavBar from "@/src/components/navBar/navBar";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <NavBar />
      <div>

      </div>
    </>
  );
}
