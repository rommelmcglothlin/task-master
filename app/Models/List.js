import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.title = data.title;
    this.chores = data.chores;
  }

  get Template() {
    return /*html*/ `
    
    `;
  }

  getOtherChores() {
    let template = "";
    this.chores.forEach((chore, i) => {
      template += `<li> ${chore} <span onclick="app.listsController.removeChore('${this.id}', ${i})">X</span></li >`;
    });
    return template;
  }
}
//Be sure to add the methods needed to create the view template for this model
//For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
