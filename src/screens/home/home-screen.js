import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export class HomeScreen extends React.Component {

  goToSecond = () => {
    const { navigation } = this.props;
    navigation.navigate('Second');
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title={'Second Screen'} onPress={this.goToSecond}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
