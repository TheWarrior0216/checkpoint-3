import { generateId } from "../utils/GenerateId.js"

export class Note {
  constructor(data) {
    this.title = data.title
    this.id = generateId()
    this.createdAt = new Date() ? data.createdAt : new Date()
    this.updatedAt = new Date()
    this.body = data.body ? data.body : ""
    this.color = data.color

  }
  get activeNoteTemplate() {
    return `
    <div class="align-content-center">
        <div class="container centerBox" style="border: 3px, solid ${this.color};">
          <div class="row bg-dark shadow">
            <div class="col-12">
              <div>
                <div class="row">
                  <div class="col-4 p-5">
                    <h1 class="mb-4"> ${this.title}</h>
                      <h4> ${this.createdAt}</h4>
                      <h4 class="my-4"> ${this.updatedAt}</h4>
                  </div>
                  <div class="col-7 textArea">
                    <form onsubmit ="app.NotesController.saveNote('${this.id}')" id="textAreaForm">
                      <textarea name="body" placeholder="Enter text here!" id="textArea"
                        class="textArea-sizing">${this.body}</textarea>
                      <div class="text-end">
                      </div>
                    </form>
                  </div>
                  <div class="col-1 align-content-end d-flex-column">
                    <div>
                      <button type="submit" form="textAreaForm" class=" btn btn-rounded btn-success mt-5 me-5 mb-1"> Save </button>
                    </div>
                    <div>
                      <button onclick="app.NotesController.desimateNote('${this.id}')" class="btn btn-rounded btn-danger  me-5 mb-5"> Delete </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
  }
  get journalInfo() {
    return `
              <div>
              <button onclick="app.NotesController.drawActiveNoteTemplate('${this.id}')" style= "border: 3px, dashed, ${this.color};" class=" btn btn-dark fs-4 ps-3 my-3">-
            ${this.title}</button>
            </div>`
  }
  get replacementScreen() {
    return ``
  }
}