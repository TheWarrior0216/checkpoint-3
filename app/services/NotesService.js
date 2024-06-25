import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { loadState, saveState } from "../utils/Store.js"

class NotesService {
  saveNote(noteData, ID) {
    const notes = AppState.Notes
    console.log(notes)
    let foundNote = notes.find((note) => note.id == ID)
    let newNote = noteData
    debugger
    foundNote.body = newNote
    foundNote.updatedAt = foundNote.updatedDate
    console.log(noteData)
    this.saveNotes()
  }
  desimateNote(ID) {
    const notes = AppState.Notes
    let findNote = notes.findIndex((note) => note.id == ID)
    notes.splice(findNote, 1)
    this.saveNotes()
  }
  createNote(noteData) {
    const note = AppState.Notes
    const newnote = new Note(noteData)
    newnote.createdAt = newnote.createdDate
    note.push(newnote)
    this.saveNotes()
  }
  drawActiveNoteTemplate(noteID) {
    let notes = AppState.Notes
    // this.loadNotes()
    let getActiveNote = notes.find((note) => note.id == noteID)
    AppState.activeNote = getActiveNote
  }
  saveNotes() {
    saveState(`journal`, AppState.Notes)
  }
  loadNotes() {
    console.log('wolah')
    AppState.Notes = loadState(`journal`, [Note])
  }
}
export const notesService = new NotesService()