import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, ShadowPropTypesIOS, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from './components/Task'


const App = () => {
  const [value, setValue] = useState('')
  const [books, setbooks] = useState([])

  const handleAddBook = () => {
    if (value.length > 0) {
      setbooks([...books, { text: value, key: Date.now(), checked: false }])
      setValue('')
    }
  }

  const handleDeleteBook = (id) => {
    setbooks(
      books.filter((Book) => {
        if (Book.key !== id) return true
      })
    )
  }

  const handleChecked = (id) => {
    setbooks(
      books.map((Book) => {
        if (Book.key === id) Book.checked = !Book.checked;
        return Book;
      })
    )
  }
  return (
    <ImageBackground style={{ width: '100%', height: '100%', flex: 1 }} source={require('./assets/List.png')}>
      <View style={styles.container}>
        <Image source= {require('./assets/List.png')} />
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            onChangeText={(value) => setValue(value)}
            placeholder={'Add a Book!'}
            placeholderTextColor="purple"
            value={value}
          />
          <TouchableOpacity onPress={() => handleAddBook()}>
            <Icon name="plus" size={30} color="#469" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {
            books.map((task) => (
              <Task
                text={task.text}
                key={task.key}
                checked={task.checked}
                setChecked={() => handleChecked(task.key)}
                delete={() => handleDeleteBook(task.key)}
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
    minHeight: '8%',
    marginTop: '6%',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'tan',
    paddingLeft: 10
  },
  taskWrapper: {
    marginTop: '5%',
    flexDirection: 'row',
    // alignItems: 'baseline',
    borderColor: '#2ED0D0',
    borderBottomWidth: 0.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 6,
    borderColor: 'black',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'rgb(534,222,222)',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5
  }
});