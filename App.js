import { Platform, StyleSheet, View ,Modal} from 'react-native';
import Constants from 'expo-constants';
import React from 'react';

import Comments from './screens/Comments'
import Feed from './screens/Feed';

export default class App extends React.Component {
  state ={
    commentsForItem:{},
    showModal: false,
    selectedItemId: null
  }
  render() {
    const {commentsForItem, showModal, selectedItemId }= this.state;

    return (
      <View style={styles.container}>
        <Feed 
          style={styles.feed} 
          commentsForItem={commentsForItem}
          onPressComments={this.openCommentScreen}
        />
        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={this.closeCommentScreen}
        >
          <Comments
            style={styles.container}
            comments={commentsForItem[selectedItemId] || []}
            onClose={this.closeCommentScreen}
          />
        </Modal>
      </View>
    );
  }
}

openCommentScreen = (id) =>{
  this.setState({ showModal:true, selectedItemId: id})
}

closeCommentScreen = () =>{
  this.setState({
    showModal:false,
    selectedItemId: null
  })
}

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  },
  comments: {
    flex: 1,
    marginTop:
      Platform.OS === 'ios' && platformVersion < 11 ? Constants.statusBarHeight : 0,
    },
    
});
