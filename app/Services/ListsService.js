import List from "../Models/List.js";
import STORE from "../store.js";

//Public
class ListsService {
  removeChore(choreId, choreIndex) {
    let rc = confirm("Are you Sure you want to delete this subtask?");
    if (rc) {
      let choreToRemove = STORE.State.lists.find(c => c.id == choreId);
      choreToRemove.chores.splice(choreIndex, 1);
      STORE.saveState();
    }
  }

  addChore(id, chore) {
    let newChore = STORE.State.lists.find(c => c.id == id);
    newChore.chores.push(chore);
    STORE.saveState();
  }

  removeTask(id) {
    let index = STORE.State.lists.findIndex(c => c.id == id);
    STORE.State.lists.splice(index, 1);
    STORE.saveState();
  }

  newTask(task) {
    STORE.State.lists.push(new List(task));
    STORE.saveState();
  }
}

const SERVICE = new ListsService();
export default SERVICE;
