import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton
} from "./styled";
import bin from '../../assets/bin.png'


export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const renderizaLista = lista.map(() => {
    return (
      <Tarefa>
        <p></p>
        <RemoveButton>
            <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    );
  });

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
   
  };

  const removeTarefa = () => {
   
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChangeTarefa={onChangeTarefa}
        />
        <AddTaskButton>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul></ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
