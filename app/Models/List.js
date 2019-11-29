import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.title = data.title;
    this.chores = data.chores || [];
  }

  get Template() {
    return /*html*/ `
    <div class="col-md-4 pb-5 m-auto">
    <div class="card border-light bg-secondary">
      <div class="card-body">
        <h3 class="card-title text-center text-light m-auto pb-3">${
          this.title
        }<span class="pl-4"><button class="btn btn-danger" onclick="app.listsController.removeTask('${
      this.id
    }')"><i class="fas fa-trash-alt"></i></button></span></h3>
        <ul class="card-text">
        ${this.getOtherChores()}
        </ul>
          <form class="text-center pb-2" onsubmit="app.listsController.addChore(event, '${
            this.id
          }')">
          <input 
          name="chore"
          class="form-col-label"
          placeholder="Add a Sub Task"  />

          <button class="btn btn-info mb-1"type="submit"><i class="fas fa-plus"></i></button>
          </form>
        
      </div>
    </div>
  </div>
    `;
  }

  getOtherChores() {
    let template = "";
    this.chores.forEach((chore, i) => {
      template += /*html*/ `
      <li class="text-light"> ${chore} <span class="text-danger" onclick="app.listsController.removeChore('${this.id}', ${i})"><i class="fas fa-minus-circle text-warning pl-2"></i></span></li >`;
    });
    return template;
  }
}
