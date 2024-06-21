import { Note } from "./models/Note.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /**@type {import('./models/Note.js').Note[]} */
  Notes = [
    new Note({
      title: 'Javascript',
      body: 'lorem ipsum',
      color: 'blue'
    }),
    new Note({
      title: 'Oh No OH no',
      body: 'lorem ipsum something something something',
      color: '#000000'
    }),
  ]
  /**@type {Note} */
  activeNote = null
}


export const AppState = createObservableProxy(new ObservableAppState())