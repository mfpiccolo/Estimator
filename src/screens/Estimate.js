import React from 'react'
import { View } from 'react-native'
import { Heading, ListItem } from 'material-bread'

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center'
  }
}

export default () => (
  <View style={styles.container}>
    <Heading
      text={'Estimate'}
      style={{
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontSize: 20
      }}
    />
  </View>
)
