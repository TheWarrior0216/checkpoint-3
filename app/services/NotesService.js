import { AppState } from "../AppState.js"

class NotesService {
  drawActiveNoteTemplate(noteID) {
    let notes = AppState.Notes
    let getActiveNote = notes.find((note) => note.id == noteID)
    AppState.activeNote = getActiveNote
  }

}
export const notesService = new NotesService()