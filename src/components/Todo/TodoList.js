import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../../TodoContext";

export default function TodoList({ days, year, month, handlePoint }) {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map(
        (todo) =>
          `${year}-${month}-${days}` === `${todo.year}-${todo.month}-${todo.days}` && (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
              firstdone={todo.firstdone}
              handlePoint={handlePoint}
            />
          )
      )}
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 20px;
    background-color: #aaaaaa;
  }
`;

TodoList.propTypes = {
  days: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  handlePoint: PropTypes.func.isRequired,
};
