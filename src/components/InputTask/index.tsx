import { MdOutlineAddCircleOutline } from 'react-icons/md';
import styles from "./styles.module.css";
export function InputTask(){
    return(
        <div className={styles.container}>
           <input className={styles.input} type="text" name="" id="" placeholder="Adicione uma nova tarefa" />
           <button type="button" className={styles.button}>
                <p>Criar</p>
                <MdOutlineAddCircleOutline size={20}/>
            </button> 
        </div>
    );
}