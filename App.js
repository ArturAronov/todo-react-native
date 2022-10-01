import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [index, setIndex] = useState(0)
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const deleteGoalHandler = id => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(element => element.id !== id)
    })
  }


  const addGoalHandler = enteredGoalText => {
    // same as setCourseGoals([...courseGoals, {text: enteredGoalText, id: index.toString()}]), however this method is not recommended by React team
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
      text: enteredGoalText,
      id: index.toString()
      }
    ])

    setIndex(index+1)
    endAddGoalHandler()
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler}/>
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            keyExtractor={element => element.id}
            renderItem={itemData => {
              return <GoalItem value={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
          }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },

});
