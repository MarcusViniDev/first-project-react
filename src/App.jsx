import { v4 as uuid } from "uuid";
import { useState } from "react";
import { Container, Box, Input, Button, BoxImage, ListItem, ImageLogo } from "./styles";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Página Home
function Home() {
  return <h1>Bem-vindo à Lista de Tarefas!</h1>;
}

// Página de Tarefas
function Tasks() {
  const [listAdd, setListAdd] = useState([]);
  const [task, setTask] = useState("");

  // Atualiza o estado do input
  function inputMudou(event) {
    setTask(event.target.value);
  }

  // Adiciona nova tarefa à lista
  function clicado() {
    if (task.trim() === "") return; // Impede entradas vazias
    setListAdd([...listAdd, { id: uuid(), task, finished: false }]); // Adiciona a nova tarefa
    setTask(""); // Limpa o campo de entrada
  }

  // Remove uma tarefa pelo ID
  function removerTarefa(id) {
    setListAdd(listAdd.filter((item) => item.id !== id));
  }

  function taskFinished(id) {
    const changeColor = listAdd.map(item =>
      item.id === id ? { ...item, finished: !item.finished } : item
    )

    setListAdd(changeColor)
  }

  function pressEnter(event) {
    if (event.key === "Enter") {
      clicado()
    }
  }

  return (
    <Container>
      <Box>
        <BoxImage>
          <ImageLogo src="/lista-de-controle.jpeg" alt="image" />
        </BoxImage>
        <div>
          {/* Entrada de tarefas */}
          <Input
            onChange={inputMudou}
            onKeyDown={pressEnter}
            type="text"
            placeholder="Afazeres..."
            value={task} // Conecta o estado ao input
          />
          <Button onClick={clicado}>Adicionar</Button>
        </div>

        {/* Lista de tarefas */}
        <ul>
          {
            listAdd.length > 0 ? (
              listAdd.map((item) => (
                <ListItem $isFinished={item.finished} key={item.id}>
                  <FcCheckmark onClick={() => taskFinished(item.id)}
                    style={{ cursor: "pointer", marginLeft: "8px" }}
                  />
                  <span>{item.task}</span>
                  <FcEmptyTrash
                    onClick={() => removerTarefa(item.id)}
                    style={{ cursor: "pointer", marginLeft: "8px" }}
                  />
                </ListItem>
              )))
              : (
                <h4>Adicione Novas Tarefas!</h4>
              )
          }
        </ul>
      </Box>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter basename="/first-project-react">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
