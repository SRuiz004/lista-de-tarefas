import { useState } from 'react';
import { Item } from './types/Item';
import * as C from './App.styles';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => { {/* Criação da lista de tarefas */}
  const [list, setList] = useState<Item[]>([
    {id: 1, name:"Estudar para avaliação de ISA", done: false},
    {id: 2, name:"Fazer trabalho de ISA", done: true},
  ]);

  const handleAddTask = (taskName: string) => { {/* Definição das características do novo item da lista de tarefas */}
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return(
    <C.Container> {/* Parte geral do site */}
      <C.Area> {/* Área do conteúdo do site */}
        <C.Header>Lista de Tarefas</C.Header>

        {/* Área  de adicionar nova tarefa*/}

        <AddArea onEnter={handleAddTask} /> {/* Aciona a função handleAddTask */}

          {/* Lista de tarefas*/}
          {list.map((item, index)=>(
            <ListItem key={index} item={item} />
          ))}
      </C.Area>
    </C.Container>
  );
}

export default App;