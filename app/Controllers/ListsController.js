import ListsService from "../Services/ListsService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let chores = store.State.lists;
  let template = "";
  chores.forEach(c => {
    template += c.Template;
  });
  document.querySelector("#chores").innerHTML = template;
}
_drawLists();

//Public
export default class ListsController {
  newChore(event) {
    event.preventDefault();
    let formData = event.target;
    let newChore = {
      title: formData.title.value
    };
    ListsService.newChore(newChore);
  }

  removeChore(id) {
    ListsService.removeChore(id);
    _drawLists();
  }
}
//NOTE: After the store loads, we can automatically call to draw the lists.

//TODO: Your app will need the ability to create, and delete both lists and listItems
