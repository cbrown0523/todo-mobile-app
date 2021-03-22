import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from './components/Task'
import firebase  from './firebase'



const App = (props) => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const todosRef = firebase.firestore().collection('todos')

  let useEffect = useEffect(() => {
    todosRef.onSnapshot(
      querySnapShot => {
        const newTodos = []
        querySnapShot. forEach(doc => {
          const todos = doc.data()
          todos.id = doc.id 
          newTodos.push(todos)
        });
        setTodos(newTodos)
      },
    )
  }, [])

  const onAddButtonPress = ()=> {
    if (values && values.length > 0){
      const data= {
        text : value,
        id: doc().id
         };
       
        todosRef
        .add(data.then(_doc => {
          setTodo('')
          Keyboard.dismiss()   
        }))
    }
  }

  const renderTodos = ({item, index}) =>{
    return (
      <View style={styles.container}>
                <Text style={styles.textInputContainer}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }
    

 const handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }])
      setValue('')
    }
  }

 const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true
      })
    )
  }

 const handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    )
  }
  return (
    <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={require('./assets/background.jpg')}>
      <View style={styles.container}>
      <Image source={{ uri: image }}
  style={{ width: 200, height: 200 }}
/>
        <Text style={{ marginTop: '10%', fontSize: 16, color: 'white' }}></Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            onChangeText={(value) => setValue(value)}
            placeholder={'Do it now!'}
            placeholderTextColor="white"
            value={value}
          />
          <TouchableOpacity onPress={() => handleAddTodo()}>
            <Icon name="plus" size={30} color="#900" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {
            todos.map((task) => (
              <Task
                text={task.text}
                key={task.key}
                checked={task.checked}
                setChecked={() => handleChecked(task.key)}
                delete={() => handleDeleteTodo(task.key)}
              />
            ))

          }
        </ScrollView>
      </View>
    </ImageBackground>
  )
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 35,
    flex: 1,
    minHeight: '7%',
    marginTop: '5%',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10
  },
  taskWrapper: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#D0D0D0',
    borderBottomWidth: 0.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 6,
    borderColor: 'white',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'rgb(222,222,222)',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5
  }
});