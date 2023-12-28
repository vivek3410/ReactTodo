
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import NavigationBar from './components/Navigation/NavigationBar';
import { useEffect, useState } from 'react';
import FormList from './components/formComponents/FormList';
import Body from './components/BodyComponent/Body';


function App() {
  let initalState = localStorage.getItem('todoList');
  if (initalState === null) {
    localStorage.setItem('todoList', "[]")
    initalState = '[]';
  }
  const [todoList, setTodoList] = useState(JSON.parse(initalState));
  const [isEdit, setIsEdit] = useState({ isEdit: false });

  const addTodo = (object) => {
    setTodoList((prev) => {
      let data = [...prev];
      data.unshift(object);
      localStorage.setItem('todolist', JSON.stringify(data));
      return [object, ...todoList];
    })
  }

  const deleteTodo = (id) => {
    setTodoList((prev) => {
      let data = [...prev];
      data = data.filter((e) => e.id !== id);
      localStorage.setItem('todoList', JSON.stringify(data));
      return [...data];
    })
  }

  const editTodo = (id) => {
    setIsEdit((prev) => {
      let data = [...todoList];
      data = data.filter((e) => e.id === id);
      return { isEdit: true, data: data[0], id: id };
    })
  }

  const editTodoItem = (id, object) => {
    setTodoList((prev) => {
      let data = [...prev];
      data = data.map((ele) => {
        return ele.id === id ? object : ele;
      })
      localStorage.setItem('todoList', JSON.stringify(data));
      return [...data];
    })
  }

  const markAllAsComplete = () => {
    setTodoList((prev) => {
      let data = [...prev];
      data = data.map((ele) => {
        if (!ele.isDone) {
          ele.isDone = true;
          return ele;
        }
        return ele;
      })
      localStorage.setItem('todoList', JSON.stringify(data));
      console.log(data);
      return [...data];
    })
  }

  const markAllAsIncomplete = () => {
    setTodoList((prev) => {
      let data = [...prev];
      data = data.map((ele) => {
        if (ele.isDone) {
          ele.isDone = false;
          return ele;
        }
        return ele;
      })
      localStorage.setItem('todoList', JSON.stringify(data));
      console.log(data);
      return [...data];
    })
  }

  const deleteCompleted = () => {
    setTodoList((prev) => {
      let data = [...prev];
      data = data.filter((ele) => !ele.isDone);
      localStorage.setItem('todoList', JSON.stringify(data));
      console.log(data);
      return [...data];
    })
  }

  useEffect(() => {
    localStorage.clear();
  }, [])


  return (
    <div className="App">
      <h1 className='title'>
        Welcome to your todo-list app!
      </h1>
      {isEdit.isEdit ? <FormList object={isEdit} editTodo={editTodo} editTodoItem={editTodoItem} /> : <FormList addTodo={addTodo} object={isEdit} id={todoList.length} />}
      <NavigationBar markAllAsComplete={markAllAsComplete} markAllAsIncomplete={markAllAsIncomplete} deleteCompleted={deleteCompleted} />

      <Container className='mt-3' fluid>
        <Row>
          {todoList.length > 0 ? todoList.map((ele, i) => {
            return (
              <Col key={i} sm={12} md={6} lg={4} className='p-5'>
                <Body i={i} data={ele} deleteTodo={deleteTodo} editTodo={editTodo} />
              </Col>
            )
          }) : (<h1 className='m-5' style={{ textAlign: "center", width: "100%" }}>No Todo List Found</h1>)}
        </Row>
      </Container>
    </div>
  );
}

export default App;
