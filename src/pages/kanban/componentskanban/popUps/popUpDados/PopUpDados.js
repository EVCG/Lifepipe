import style from './PopUpDados.module.css';

export default function PopUpDados({ onClose }) {

    return (
        <>
            <div className={style.ContainerPoUpDados}>
            <span className={style.close} onClick={onClose}>x</span>
                <div className={style.ContentPoUpDados}>
                    PopUpDados
                </div>
            </div>
        </>
    );
};