import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Store, Persistor } from './App/Redux/Store';

import Loader from './App/Loader/Components/Loader';
import AppLayout from './App/App';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider
        store={Store}
      >
        <PersistGate
          loading={<Loader />}
          persistor={Persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    );
  }
}
