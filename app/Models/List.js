import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title;
    this.chores = data.chores || [];
  }

  get Template() {
    return /*html*/ `
    <div class="col-md-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center m-auto">${this.title}</h5>
        <ul class="card-text">
        ${this.getOtherChores()}
        </ul>
          <form onsubmit="app.listsController.addChore(event, '${this.id}')">
          <input 
          name="chore" 
          placeholder="Add a Sub Task"  />

          <button class="btn btn-success"type="submit">Add</button>
          </form>
        <button class="btn btn-danger" onclick="app.listsController.removeTask('${
          this.id
        }')">Delete Task</button>
      </div>
    </div>
  </div>
    `;
  }

  getOtherChores() {
    let template = "";
    this.chores.forEach((chore, i) => {
      template += /*html*/ `
      <li> ${chore} <span class="text-danger" onclick="app.listsController.removeChore('${this.id}', ${i})">x</span></li >`;
    });
    return template;
  }
}
