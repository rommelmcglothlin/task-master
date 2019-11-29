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
    let rt = confirm("Are you Sure you want to delete this task?");
    if (rt) {
      let index = STORE.State.lists.findIndex(c => c.id == id);
      STORE.State.lists.splice(index, 1);
      STORE.saveState();
    }
  }

  // removeTask(id) {
  //   let index = STORE.State.lists.findIndex(c => c.id == id);
  //   // @ts-ignore
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then(result => {
  //     if (result) {
  //       STORE.State.lists.splice(index, 1);
  //       STORE.saveState();
  //       // @ts-ignore
  //       Swal.fire("Deleted!", "Your list has been deleted.", "success");
  //     } else return;
  //   });
  // }

  newTask(task) {
    STORE.State.lists.push(new List(task));
    STORE.saveState();
  }
}

const SERVICE = new ListsService();
export default SERVICE;
