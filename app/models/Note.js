export class Note {
  constructor(data) {
    this.title = data.title
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.body = data.body
  }
  get noteTemplate() {
    return ``
  }
}