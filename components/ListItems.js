import React from 'react';
import {ListView, TodoText, colors} from '../styles/appStyles';
import {Text} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
const ListItems = ({todos, setTodos}) => {
    return (
        <SwipeListView
            data = {todos}
            renderItems= {(data)=> {
                return (
                    <ListView>
                        <>
                        <TodoText>{data.itm.title}</TodoText> 
                        </>
                        </ListView>
                )
            }}
            renderHiddenItem = {() => {

            }}
            />
    );
}
export default ListItems;