import { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { nanoid } from "nanoid";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 18px;
  padding: 10px;
  background-color: #404e7c;
  border-radius: 5px;
  border: none;
  color: white;
  margin: 15px;
  &:hover{
    background-color: chocolate;

  }
  &:active{
    background-color: #404e7c;
  }
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 20px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const ListBox = styled.div`
  display: flex;
`;

const TextField = styled.input`
  display: flex;
`;




interface ItemsProps {
  id: string;
  content: string;
}

function App() {
  const [items, setItems] = useState<ItemsProps[]>([]);
  const [newItemContent, setnewItemContent] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const itemsContent = [...items];
    const [removedItem] = itemsContent.splice(result.source.index, 1);
    itemsContent.splice(result.destination.index, 0, removedItem);
    setItems(itemsContent);
  };

  const addItem = () => {
    if (!newItemContent.trim()) return;
    const listItemId = nanoid();
    const newList = {
      id: listItemId,
      content: newItemContent,
    };
    setItems([...items, newList]);
    setnewItemContent("");
  };

  return (
    <>
      <Container>
        <InputContainer>
          <TextField
            type="text"
            value={newItemContent}
            onChange={(e) => {
              setnewItemContent(e.target.value);
            }}
            placeholder="Add a new item please"
          />
          <Button onClick={addItem}>Add</Button>
        </InputContainer>
        <ListContainer>
          <List>
            <h2>ToDoList</h2>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="myList">
                {(provider) => (
                  <div ref={provider.innerRef} {...provider.droppableProps}>
                    {items.map(({ id, content }: ItemsProps, index) => (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provider) => (
                          <ListBox
                            ref={provider.innerRef}
                            {...provider.draggableProps}
                            {...provider.dragHandleProps}
                          >
                            {content}
                          </ListBox>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </List>
        </ListContainer>
      </Container>
    </>
  );
}

export default App;
