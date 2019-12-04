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
    let form = event.target;
    let task = {
      title: form.title.value
    };
    ListsService.newTask(task);
    _drawLists();
  }

  removeTask(id) {
    ListsService.removeTask(id);
    // @ts-ignore
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover a deleted task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        _drawLists();
        // @ts-ignore
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      } else return;
    });
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
