import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { ITarefa } from "../interfaces/ITarefa";
import { v4 as uuidv4 } from "uuid";
import styles from "./FormTodo.module.css";

interface FormTodoProps {
  onCreateTask: (task: ITarefa) => void;
}

export const FormTodo = ({ onCreateTask }: FormTodoProps) => {
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    event.preventDefault();

    onCreateTask({
      id: uuidv4(),
      descricao: description,
      concluido: false,
    });

    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          required
          placeholder="Adicione uma nova tarefa"
          value={description}
          onChange={(event) => {
            setDescription(event.currentTarget.value);
          }}
        />
        <button type="submit">
          Criar <PlusCircle size={24} />
        </button>
      </div>
    </form>
  );
};
