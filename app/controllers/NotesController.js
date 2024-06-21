import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
import { setHTML } from "../utils/Writer.js"

export class NotesController {
  constructor() {
    console.log('Running NotesController')
    this.drawJournalInfo()
  }
  drawActiveNoteTemplate(noteID) {
    notesService.drawActiveNoteTemplate(noteID)
    let notes = AppState.activeNote
    setHTML('noteCard', notes.activeNoteTemplate)
  }
  drawJournalInfo() {
    const notes = AppState.Notes
    let journalInfoHTML = ''
    notes.forEach((note) => journalInfoHTML += note.journalInfo)
    setHTML('canvasBody', journalInfoHTML)
    setHTML('journalEntries', `You have ${notes.length} Notes`)
  }
}
