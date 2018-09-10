import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';
import Api from './../../Utils/Api/Api';
import { connect } from 'react-redux';

class Search extends Component {
  state = {
    text: ''
  }

  handleSubmit = async () => {
    const movies = await Api.searchMovie(this.state.text);
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0]
      }
    })
  }

  handleChangeText = (text) => {
    this.setState({
      text
    })
  }

  render() {
    return (
      <TextInput
        placeholder="Busca tu película favorita"
        autoCorrent={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={styles.input}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})

export default connect(null)(Search);