import { AppState } from "../AppState.js";
import { Snack } from "../models/Vending.js";
import { saveState } from "../utils/Store.js";


class SnackService {

    selectSnack(snackName) {
        let selectedSnack = AppState.snacks.find(Snack => Snack.name === snackName)
        AppState.activeSnack = selectedSnack
        AppState.mySnacks.push(snackName)
        AppState.emit('mySnacks')
        console.log('mySnacks');
        this.saveMySnacks()
    }

    saveMySnacks() {

        saveState('mySnacks', AppState.mySnacks)
    }




}



export const snackService = new SnackService