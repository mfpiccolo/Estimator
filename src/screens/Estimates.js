import React from 'react'
import { View } from 'react-native'
import { Avatar, Heading, ListItem, ProgressCircle } from 'material-bread'

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center'
  }
}

const album = (
  <Avatar
    type="icon"
    content="album"
    contentColor={'#ececec'}
    color={'#a3a3a3'}
    size={40}
  />
)

const Progress = ({ value, color }) => (
  <ProgressCircle
    value={value}
    size={48}
    thickness={4}
    color={color || '#2b80ff'}
    unfilledColor="#D3D3D3"
    animationMethod="timing"
    animationConfig={{ speed: 1 }}
    shouldAnimateFirstValue
    determinate
  />
)

export default ({ history }) => (
  <View style={styles.container}>
    <Heading
      text={'Over Estimate'}
      style={{
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontSize: 20
      }}
    />
    <ListItem
      text={'ABC-123 Create Item'}
      secondaryText={'22 Billed | 18 Estimated'}
      media={album}
      actionItem={<Progress value={100} color={'#FF6347'} />}
      onPress={() => history.push(`/estimates/1`)}
    />

    <Heading
      text={'Under Estimate'}
      style={{
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontSize: 20
      }}
    />
    <ListItem
      text={'ABC-123 Create Item'}
      secondaryText={'10 Billed | 20 Estimated'}
      media={album}
      actionItem={<Progress value={50} />}
    />
    <ListItem
      text={'ABC-123 Create Item'}
      secondaryText={'0 Billed | 12 Estimated'}
      media={album}
      actionItem={<Progress value={0} />}
    />
    <ListItem
      text={'ABC-123 Create Item'}
      secondaryText={'3 Billed | 15 Estimated'}
      media={album}
      actionItem={<Progress value={20} />}
    />
  </View>
)
