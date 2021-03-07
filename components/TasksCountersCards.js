import React from 'react'
import { View, StyleSheet,  } from 'react-native'
import Card from "./common/Card" 

const TasksInfoCards = ({totalCounter, activeCounter, doneCounter}) => {
return(
    <View style={styles.smallCardsContainer}>
    <Card
      cardStyle={styles.cardStyle}
      cardNameStyle={styles.cardNameStyle}
      counterStyle={styles.counterStyle}
      count={totalCounter}
      cardName="Total Tasks"
    />
    <Card
      cardStyle={styles.cardStyle}
      cardNameStyle={styles.cardNameStyle}
      counterStyle={styles.counterStyle}
      count={activeCounter}
      cardName="Active Tasks"
    />
    <Card
      cardStyle={styles.cardStyle}
      cardNameStyle={styles.cardNameStyle}
      counterStyle={styles.counterStyle}
      count={doneCounter}
      cardName="Tasks Done"
    />
  </View>
    )
}

const styles = StyleSheet.create({
    smallCardsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      },
      cardStyle: {
        width: "32%",
        height: 65,
      },
      counterStyle: {
        fontSize: 18,
      },
      cardNameStyle: {
        fontSize: 11,
      },
})

export default TasksInfoCards
