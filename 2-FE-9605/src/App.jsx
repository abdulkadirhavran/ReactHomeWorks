/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

const ListItem = styled.li`
  cursor: pointer;
  list-style-type: square;
`;

function App() {
  const [todoInput, setTodoInput] = useState("");

  const [todos, setTodos] = useState([]);

  const addTodo = () => {  // Bu fonksiyonda todo listeye yeni bir eleman eklerken bir önce eklediğimiz elemanları getirip(...todos-> todos içinde ki değerleri yayar.) sonrasında yeni elemanı(todoInput) getiriyoruz.
    setTodos([...todos, todoInput]);
    setTodoInput(""); // Burada ise input'a girilen değer sonrası input kutucuğunu boş döndürmeye yarar.
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div>
            <Form.Label className="mb-3">Target</Form.Label>
          </div>
          <Form.Control
            value={todoInput} // Burada input kutucuğuna  value(değer) olarak todoInput veriyoruz ki setTodoInput çalışsın.
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            type="text"
            placeholder="Requirement"
          />
        </Form.Group>
      </Form>
      <Button className="mb-5" onClick={addTodo} variant="outline-success">
        Add
      </Button>

      <ul>
        {todos.map((todo) => (
          <ListItem
            onClick={() => {
              setTodos(todos.filter((filterList) => filterList !== todo));
            }}
            key={todo}
          >
            {todo}
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default App;
