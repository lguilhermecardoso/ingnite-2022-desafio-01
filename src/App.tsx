import { FormTodo } from "./components/FormTodo";
import { Logo } from "./components/Logo";

import styles from "./App.module.css";
import { useState } from "react";
import { CardTodo } from "./components/CardTodo";
import { ITarefa } from "./interfaces/ITarefa";
import { ClipboardText } from "phosphor-react";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  const handleCheckTask = (task: ITarefa) => {
    const newTasks: ITarefa[] = tarefas.map((t) => {
      if (t.id === task.id) {
        t.concluido = task.concluido;
      }

      return t;
    });

    setTarefas(newTasks);
  };

  const handleAddTask = (task: ITarefa) => {
    setTarefas((prevState) => [...prevState, task]);
  };

  const handleDeleteTask = (task: ITarefa) => {
    setTarefas((prevState) => {
      return prevState.filter((t) => t.id !== task.id);
    });
  };

  const getTarefasConcluidas = () => {
    return tarefas.filter((t) => t.concluido == true).length;
  };

  return (
    <div className={styles.container}>
      <header>
        <Logo />
      </header>
      <main>
        <div className={styles.newTask}>
          <FormTodo onCreateTask={handleAddTask} />
        </div>
        <div className={styles.tasksContainer}>
          <div className={styles.info}>
            <span className={styles.infoTarefas}>
              Tarefas criadas{" "}
              <span className={styles.infoItem}>{tarefas.length}</span>
            </span>
            <span className={styles.infoConcluidas}>
              Concluídas{" "}
              <span className={styles.infoItem}>
                {getTarefasConcluidas()} de {tarefas.length}
              </span>
            </span>
          </div>
          {tarefas.length > 0 ? (
            tarefas.map((t) => {
              return (
                <CardTodo
                  tarefa={t}
                  onCheck={handleCheckTask}
                  onDelete={handleDeleteTask}
                />
              );
            })
          ) : (
            <div className={styles.tasksEmpty}>
              <ClipboardText size={64} className={styles.icon} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
