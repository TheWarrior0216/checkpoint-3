import { Note } from "./models/Note.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /**@type {Note[]} */
  Notes = [
    new Note({
      title: 'Welcome to Register',
      body: `This is where you can begin a new Register. Just click 'Select your Note to begin!!'`,
      color: 'blue',
      createdAt: new Date()
    })
  ]
  /**@type {Note} */
  activeNote = null
}


export const AppState = createObservableProxy(new ObservableAppState())