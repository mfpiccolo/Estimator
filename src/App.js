import React from 'react'
import { View, Text } from 'react-native'
import { Backdrop, List, ListItem, Icon } from 'material-bread'

import Routes from './Routes'

const styles = {
  backdropHeader: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backdropHeaderTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    marginLeft: 72
  }
}

const backLayerRevealed = (
  <View style={{ flex: 1, width: '100%' }}>
    <View style={styles.backdropHeader}>
      <Text style={styles.backdropHeaderTitle}>Navigation</Text>
    </View>

    <List
      style={{
        width: '100%',
        backgroundColor: 'transparent'
      }}
    >
      <ListItem
        text={'Estiamtes'}
        textStyle={{ color: 'white' }}
        selected
        style={{ backgroundColor: 'transparent' }}
        icon={<Icon name={'home'} size={24} color={'white'} />}
      />
      <ListItem
        text={'Settings'}
        textStyle={{ color: 'white' }}
        style={{ backgroundColor: 'transparent' }}
        icon={<Icon name={'settings'} size={24} color={'white'} />}
      />
    </List>
  </View>
)

export default () => (
  <View style={{ marginBottom: 80 }}>
    <Backdrop
      backLayerConcealed={
        <View style={styles.backdropHeader}>
          <Text style={styles.backdropHeaderTitle}>App</Text>
        </View>
      }
      backLayerRevealed={backLayerRevealed}
      offset={160}
    >
      <Routes />
    </Backdrop>
  </View>
)
