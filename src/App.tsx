import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TasksList } from "./components/TasksList";
import "./global.css";

export interface Task{
  content: string;
  checked: boolean;
}
export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(task: Task){
    setTasks([...tasks, task])
  }
  return (
    <>
      <Header />
      <main className={styles.container}>
        <InputTask addTask={handleAddTask}/>
        <TasksList tasks={tasks} />
      </main>
    </>
  );
}
