import { HiOutlineTrash } from "react-icons/hi";
import { Task } from "../../App";
import Checked from "../../assets/checked.png";
import Clipboard from "../../assets/clipboard.svg";
import Unchecked from "../../assets/unchecked.png";
import styles from "./styles.module.css";

interface TasksListProps {
  tasks: Task[];
  removeTask: (task: Task) => void;
  checkTask: (task: Task) => void;
}
export function TasksList({ tasks, removeTask, checkTask }: TasksListProps) {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.counter}>
          <p className={styles.labelNew}>Tarefas criadas</p>
          <p className={styles.number}>{tasks.length}</p>
        </div>
        <div className={styles.counter}>
          <p className={styles.labelDone}>Concluídas</p>
          <p className={styles.number}>
            {tasks.filter((task) => task.checked === true).length} de {tasks.length}
          </p>
        </div>
      </header>
      {tasks.length === 0 ? (
        <main className={styles.message}>
          <img className={styles.clipboard} src={Clipboard} alt="clipboard" />
          <p className={styles.textBold}>
            Você ainda não tem tarefas cadastradas
          </p>
          <p className={styles.text}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </main>
      ) : (
        <main className={styles.list}>
          {tasks.map((task) => (
            <div key={task.id} className={styles.task}>
              <div className={styles.taskNameAndStatus}>
                <button className={styles.checkbox} onClick={() => checkTask(task)}>
                  <img src={task.checked ? Checked : Unchecked} />
                </button>
                <p
                  className={
                    task.checked
                      ? styles.taskDescriptionDone
                      : styles.taskDescription
                  }
                >
                  {task.content}
                </p>
              </div>
              <HiOutlineTrash 
                size={24} 
                title="Excluir tarefa" 
                onClick={() => removeTask(task)} 
                className={styles.trash}
              />
            </div>
          ))}
        </main>
      )}
    </div>
  );
}
