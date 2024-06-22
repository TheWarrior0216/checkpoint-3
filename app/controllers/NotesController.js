import { AppState } from "../AppState.js"
import { notesService } from "../services/NotesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

export class NotesController {
  constructor() {
    console.log('Running NotesController')
    this.drawJournalInfo()
    AppState.on('Notes', this.drawJournalInfo)
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
  createNote() {
    event.preventDefault()
    const form = event.target
    const noteData = getFormData(form)
    notesService.createNote(noteData)
  }
  desimateNote(ID) {
    if (!window.confirm('Are You Ready To Decimate Your Note?')) {
      return
    }
    const notes = AppState.Notes
    notesService.desimateNote(ID)
    setHTML('noteCard', AppState.activeNote.replacementScreen)
  }
  saveNote(ID) {
    event.preventDefault()
    const form = event.target
    debugger
    const noteData = getFormData(form)
    notesService.saveNote(`${noteData.body}`, ID)
    console.log(AppState.activeNote.body)
    setHTML('textArea', AppState.activeNote.body)
  }
}

