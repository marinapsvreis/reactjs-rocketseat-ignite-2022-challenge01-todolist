import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import { TasksList } from "./components/TasksList";
import "./global.css";

export interface Task{
  id: number;
  content: string;
  checked: boolean;
}
export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(task: Task){
    task.id = tasks.length + 1;
    setTasks([...tasks, task])
  }

  function handleRemoveTask(taskForRemove: Task){
    const tasksWithoutTaskToRemove = tasks.filter((task) => task.id !== taskForRemove.id)
    setTasks(tasksWithoutTaskToRemove);
  }

  function handleCheckTask(taskToCheck: Task){
    const newStatus = !taskToCheck.checked;
    taskToCheck.checked = newStatus;

    const tasksWithourTaskWithOldStatus = tasks.filter((task) => task.id !== taskToCheck.id)
    setTasks([...tasksWithourTaskWithOldStatus, taskToCheck]);
  }
  
  return (
    <>
      <Header />
      <main className={styles.container}>
        <InputTask addTask={handleAddTask}/>
        <TasksList tasks={tasks} removeTask={handleRemoveTask} checkTask={handleCheckTask} />
      </main>
    </>
  );
}
