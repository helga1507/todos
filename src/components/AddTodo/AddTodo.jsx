import React from 'react';
import styled from "styled-components";
import {connect} from 'react-redux'
import {getNewTodo} from '../../store/todo/reducers'
import {changeNewTodo, addTodoRequest} from '../../store/todo/actions'


const AddTodo = (props) => {
  const {value} = props;

  const handleChange = e => props.changeNewTodo(e.target.value);

  const handleAdd = () => value && props.addTodoRequest();

  const handleKeyPress = e => e.key === 'Enter' && handleAdd();

  return (
    <Block>
      <Input value={value} onChange={handleChange} placeholder={'Enter new todo'} onKeyPress={handleKeyPress}/>
      <Button onClick={handleAdd}>AddTodo</Button>
    </Block>
  );
};

const mapStateToProps = state => ({
  value: getNewTodo(state)
});

const Block = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: grid;
  grid-gap: 20px;
  grid-template: auto / 1fr auto;
`;
const Button = styled.button`
  border-radius: 4px;
  background-color: #2196f3;
  padding: 10px 15px;
  color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
`;
const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid gray;
`;

export default connect(mapStateToProps, {changeNewTodo, addTodoRequest})(AddTodo);


