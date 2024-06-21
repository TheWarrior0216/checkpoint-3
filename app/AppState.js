import { Note } from "./models/Note.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /**@type {import('./models/Note.js').Note[]} */
  Notes = [
    new Note({
      title: 'Javascript',
      body: 'lorem ipsum',
      color: '#00000'
    }),
    new Note({
      title: 'Oh No OH no',
      body: 'lorem ipsum something something something',
    }),
  ]
  /**@type {Note} */
  activeNote = null
}


export const AppState = createObservableProxy(new ObservableAppState())