import { StyleSheet, Text, View, Pressable } from 'react-native';

const GoalItem = props => {
  return(
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#dddddd'}}
        onPress={props.onDeleteItem.bind(this, props.id)}

        // ripple effect for iOS
        // alternative: style={{pressed} => pressed && styles.pressedItem}
        style={pressData => pressData.pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}> {props.value} </Text>
      </Pressable>
    </View>
)
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: '#fff',
  }
})
