import Image from "next/image";
import styles from './users.module.css';

export default function Users({ id, image, name, email, charge, onChargeChange, onDelete }) {
    return (
        <div className={styles.ContainerUser}>
            <Image width={55} height={55} src={image} className={styles.ImageUser} alt='Foto de perfil' />
            <div className={styles.UserDate}>
                <p className={styles.FullNameUser}>{name}</p>
                <p className={styles.EmailUser}>{email}</p>
            </div>
            <div className={styles.management}>
                <select className={styles.DropDownUser} value={charge} onChange={(e) => onChargeChange(id, e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="Usuario">Usuário</option>
                    <option value="Gerente">Gerente</option>
                </select>
                <div className={styles.deleteUser} onClick={() => onDelete(id)}>x</div>
            </div>
        </div>
    );
}
