// PopUpMember.js
import { useState } from "react";
import Users from './components/users/users';
import styles from './popUpMember.module.css';
import Lucas from "@/src/image/lucas.png";
import Elisson from "@/src/image/Elisson.png";
import { IoSearch } from "react-icons/io5";

export default function PopUpMember({ setPopMember }) {
    const [users, setUsers] = useState([
        { id: 1, image: Elisson, name: "Elisson Victor Costa Gama Siquera", email: "elisson.siqueira@lifecon.com", charge: "Admin" },
        { id: 2, image: Lucas, name: "Lucas Araujo De oliveira", email: "Lucas.Oliveira@lifecon.com", charge: "Admin" },
        { id: 3, image: Elisson, name: "Guilhotina Ferreira de Sousa ", email: "Guilhotina.Sousa@lifecon.com", charge: "Gerente" },
        { id: 4, image: Elisson, name: "Maria Rodrigues", email: "maria.rodrigues@lifecon.com", charge: "Diretor" },
        { id: 5, image: Lucas, name: "Carlos Mendes", email: "carlos.mendes@lifecon.com", charge: "Usuario" },
        { id: 6, image: Elisson, name: "Ana Paula Lima", email: "ana.paula@lifecon.com", charge: "Usuario" },
        { id: 7, image: Elisson, name: "Roberto Silva", email: "roberto.silva@lifecon.com", charge: "Usuario" },
        { id: 8, image: Lucas, name: "Juliana Martins", email: "juliana.martins@lifecon.com", charge: "Gerente" }

    ]);

    const handleChargeChange = (userId, newCharge) => {
        setUsers(users.map(user => user.id === userId ? { ...user, charge: newCharge } : user));
    };
    const handleDeleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <div className={styles.ContainerMember}>
            <div className={styles.ContentMember}>
                <div className={styles.ExitMember} onClick={() => setPopMember(false)}>x</div>
                <div className={styles.ContainerSearchMember}>
                    <div>
                        <h1 className={styles.TitleMember}> 2 Membro</h1>
                        <div className={styles.inputNavBarContainer}>
                            <IoSearch className={styles.searchIconMember} />
                            <input type='text' className={styles.inputNavBarMember} placeholder="Pesquisar por nome" />
                        </div>
                    </div>
                </div>
                <div className={styles.ContentData}>
                    <div className={styles.Data}>
                        <div className={styles.Table}>
                            <p className={styles.TitleName}>Nome</p>
                            <p className={styles.TitleName}>Função</p>
                        </div>
                        <div className={styles.LineMember}></div>
                        <div className={styles.ContentUsersPopUp}>
                            {users.map(person =>
                                <Users
                                    key={person.id}
                                    id={person.id}
                                    image={person.image}
                                    name={person.name}
                                    email={person.email}
                                    charge={person.charge}
                                    onChargeChange={handleChargeChange}
                                    onDelete={handleDeleteUser}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
