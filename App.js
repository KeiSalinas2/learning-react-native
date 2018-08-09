import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './App/Screens/Containers/Home';
import Header from './App/Sections/Components/Header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header />
        <Text>header</Text>
        <Text>buscador</Text>
        <Text>categorías</Text>
        <Text>sugerencias</Text>
      </Home>
    );
  }
}
