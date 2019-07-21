import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getList, getIsLoad, getError} from '../../store/todo/reducers'
import {getTodosRequest} from '../../store/todo/actions'
import styled from 'styled-components'
import AddTodo from "./AddTodo";
import Item from "./Item";

class Todos extends Component {

  componentDidMount() {
    this.props.getTodosRequest()
  }

  getTodos = () => {
    const {list} = this.props;

    if(!list.length)
      return (<IsLoad>Данных нет</IsLoad>);

    return list.map(item => (
      <Item key={item.id} name={item.name} id={item.id}/>
    ));
  };


  render() {
    const {isLoad, error} = this.props;

    return (
      <Block>
        <H1>Todos</H1>
        <AddTodo/>
        <List>
          {error
            ? <IsError>{error}</IsError>
            : isLoad
              ? <IsLoad>Данные загружаются...</IsLoad>
              : this.getTodos()
          }
        </List>
      </Block>
    );
  }
}

const mapStateToProps = state => ({
  list: getList(state),
  isLoad: getIsLoad(state),
  error: getError(state)
});

const Block = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 700px;
  margin: 0 auto;
`;
const H1 = styled.h1`
  margin-bottom: 10px;
`;
const List = styled.ul`
  width: 100%;
  min-height: 400px;
`;
const IsLoad = styled.h3`
  color: grey;
  text-align: center;
  margin: 15px;
`;
const IsError = styled.h3`
  color: red;
  text-align: center;
  margin: 15px;
`;

export default connect(mapStateToProps, {getTodosRequest})(Todos)
