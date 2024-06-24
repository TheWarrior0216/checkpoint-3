import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { loadState, saveState } from "../utils/Store.js"

class NotesService {
  saveNote(noteData, ID) {
    const note = AppState.Notes
    let foundNote = note.find((note) => note.id == ID)
    let newNote = noteData
    debugger
    foundNote.body = newNote
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
    note.push(newnote)
    this.saveNotes()
  }
  drawActiveNoteTemplate(noteID) {
    let notes = AppState.Notes
    let getActiveNote = notes.find((note) => note.id == noteID)
    this.loadNotes()
    AppState.activeNote = getActiveNote
  }
  saveNotes() {
    saveState('Journal', AppState.activeNote)
  }
  loadNotes() {
    console.log('wolah')
    loadState('Journal', [Note])
  }
}
export const notesService = new NotesService()