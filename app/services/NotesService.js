import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"

class NotesService {
  saveNote(noteData) {
    const note = AppState.Notes
  }
  desimateNote(ID) {
    const notes = AppState.Notes
    let findNote = notes.findIndex((note) => note.id == ID)
    notes.splice(findNote, 1)
  }
  createNote(noteData) {
    const note = AppState.Notes
    const newnote = new Note(noteData)
    note.push(newnote)
  }
  drawActiveNoteTemplate(noteID) {
    let notes = AppState.Notes
    let getActiveNote = notes.find((note) => note.id == noteID)
    AppState.activeNote = getActiveNote
  }

}
export const notesService = new NotesService()