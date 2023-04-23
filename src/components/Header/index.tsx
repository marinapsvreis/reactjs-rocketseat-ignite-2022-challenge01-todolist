import Logo from "../../assets/logo-todolist.svg";
import styles from "./styles.module.css";
export function Header(){
    return(
        <header className={styles.container}>
            <img className={styles.logo} src={Logo} alt="logo todo list" />
        </header>
    );
}