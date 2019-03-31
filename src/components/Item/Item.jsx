import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {deleteTodoRequest} from '../../store/todo/actions'
import styled from 'styled-components'
import folder from '../../icons/folder.svg'
import trash from '../../icons/trash.svg'

const Item = props => {
  const {name, id} = props;

  const handleDelete = () => props.deleteTodoRequest({id});

  return (
    <Row>
      <Folder><img src={folder} alt={''}/></Folder>
      {name}
      <Icon onClick={handleDelete}><img src={trash} alt={''}/></Icon>
    </Row>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  id: PropTypes.any
};

const mapStateToProps = () => ({});

const Row = styled.li`
  padding: 10px;
  display: grid;
  grid-gap: 15px;
  grid-template: auto / 30px 1fr 20px;
  align-items: center;
`;
const Folder = styled.div`
  width: 30px;
  height: 30px;
  padding: 7px;
  background-color: gray;
  border-radius: 50%;
`;
const Icon = styled.div`
  cursor: pointer;
`;

export default connect(mapStateToProps,{deleteTodoRequest})(Item);
