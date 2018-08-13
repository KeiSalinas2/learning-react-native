import { createStore } from 'redux';
import reducer from './Reducers/Videos'

const store = createStore(reducer, {
  suggestionList: [],
  categoryList: [],
})

export default store;