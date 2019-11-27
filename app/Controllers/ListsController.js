import ListsService from "../Services/ListsService.js";
import STORE from "../store.js";

function _drawLists() {
  let chores = STORE.State.lists;
  let template = "";
  chores.forEach(c => {
    template += c.Template;
  });
  document.querySelector("#chores").innerHTML = template;
}
_drawLists();

//Public
export default class ListsController {
  newTask(event) {
    event.preventDefault();
    let formData = event.target;
    let task = {
      title: formData.title.value
    };
    ListsService.newTask(task);
    _drawLists();
  }

  removeTask(id) {
    ListsService.removeTask(id);
    _drawLists();
  }

  addChore(event, id) {
    event.preventDefault();
    let chore = event.target.chore.value;
    ListsService.addChore(id, chore);
    _drawLists();
  }

  removeChore(choreId, choreIndex) {
    ListsService.removeChore(choreId, choreIndex);
    _drawLists();
  }
}
