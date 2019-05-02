import { observable } from 'mobx';

class TodoStore {
  @observable todo = ['buy milk', 'walk dog'];
  @observable filter = '';
}

let store = window.store = new TodoStore

export default store