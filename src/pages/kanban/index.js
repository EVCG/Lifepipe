import React from 'react';
import NavBar from '@/src/components/navBar/navBar';
import Footer from '@/src/components/footer/footer';
import styles from './kanban.module.css';
import ColunaCard from './componentskanban/colunas/ColunaCard';

export default function kanban() {
    
    return (
        <>
            <NavBar />
            <div className={styles.navKanban}>
                <a href='#'>Kanban</a>
                <a href='#'>Fluxo</a>
                <a href='#'>Alertas Equipe</a>
            </div>
            
            <ColunaCard/>
            <Footer />
        </>
    )
    
}
