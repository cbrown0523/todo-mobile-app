import React from 'react';
import Header  from './Header.js';
import ListItems from './Listitems';

const Home = () => {

const initialBook = [{
    title: "book1",
    key:"1"
}]
const [todos, setTodos] = useState(initialTodo)
    return (
        <>
        <Header />
        <ListItems 
        todos={todos}
        setTodos= {setTodos}
        />
        </>
    );
}
export default Home;