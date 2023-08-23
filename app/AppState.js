import { Value } from "./models/Value.js"
import { Snack } from "./models/Vending.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {

  /** @type {import('./models/Vending.js').Snack[]} */
  snacks = [
    new Snack({ name: 'chips', price: 3.50, imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }),
    new Snack({ name: 'lollipop', price: 2.00, imgUrl: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80' }),
    new Snack({ name: 'pop', price: 2.50, imgUrl: 'https://images.unsplash.com/photo-1605548230624-8d2d0419c517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' }),
    new Snack({ name: 'gum', price: 1.50, imgUrl: 'https://images.unsplash.com/photo-1576644461179-ddd318c669e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80' })

  ]
  /** @type {Snack}  */
  activeSnack = null

  /** @type {Snack[]} */
  mySnacks = []

  money = 0


  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])



  // NOTE Used to load initial data
  init() {
    // NOTE you can console log this in the init to look at the appstate on load
    // console.log(this) 
    // what to pull out⬇️
    // what to make the data ⬇️ after it is pulled out. in this case it's an array of gachamon
    this.mySnacks = loadState('mySnacks', [Snack])
  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
