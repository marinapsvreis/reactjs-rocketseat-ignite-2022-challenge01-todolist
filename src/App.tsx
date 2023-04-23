import styles from "./App.module.css";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TasksList } from "./components/TasksList";
import "./global.css";
export function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <InputTask />
        <TasksList />
      </main>
    </>
  );
}
