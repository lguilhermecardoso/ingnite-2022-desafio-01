import { CheckCircle, Circle, Trash } from "phosphor-react";
import { ITarefa } from "../interfaces/ITarefa";
import styles from "./CardTodo.module.css";

interface CardTodoProps {
  tarefa: ITarefa;
  onCheck: (task: ITarefa) => void;
  onDelete: (task: ITarefa) => void;
}

export const CardTodo = ({ tarefa, onCheck, onDelete }: CardTodoProps) => {
  const handleCheck = () => {
    tarefa.concluido = !tarefa.concluido;
    onCheck(tarefa);
  };

  return (
    <div className={styles.container}>
      {tarefa.concluido ? (
        <>
          <CheckCircle
            className={styles.checked}
            weight="fill"
            size={28}
            onClick={handleCheck}
          />
          <p className={styles.textCompleted}>{tarefa.descricao}</p>
        </>
      ) : (
        <>
          <Circle className={styles.unchecked} size={28} onClick={handleCheck} />
          <p>{tarefa.descricao}</p>
        </>
      )}
      
      <Trash
        className={styles.trash}
        size={24}
        onClick={() => {
          onDelete(tarefa);
        }}
      />
    </div>
  );
};
