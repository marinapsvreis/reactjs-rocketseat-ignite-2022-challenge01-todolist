import { ChangeEvent, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Task } from "../../App";
import styles from "./styles.module.css";

interface InputTaskProps {
  addTask: (task: Task) => void;
}
export function InputTask({ addTask }: InputTaskProps) {
  const [description, setDescription] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        onChange={handleInputChange}
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="button"
        className={styles.button}
        onClick={() => addTask({ content: description, checked: false })}
      >
        <p>Criar</p>
        <MdOutlineAddCircleOutline size={20} />
      </button>
    </div>
  );
}
