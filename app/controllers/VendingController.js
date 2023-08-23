import { AppState } from "../AppState.js";
import { snackService } from "../services/SnackService.js"
import { setHTML } from "../utils/Writer.js"



export class VendingController {
    constructor() {
        this.drawSnacks()
        AppState.on('activeSnack', this.drawActiveSnack)
        AppState.on('mySnacks', this.drawMySnacks)

    }

    drawSnacks() {
        let listContent = ''
        AppState.snacks.forEach(snacks => { listContent += snacks.snackTemplate })
        document.getElementById('snacks').innerHTML = listContent;

    }

    selectSnack(snackName) {
        console.log('vending', snackName)
        snackService.selectSnack(snackName)
        // this.drawSnack()
    }



    drawMySnacks() {
        let listContent = ''
        AppState.mySnacks.forEach(snacks => { listContent += snacks.snack2Template })
        document.getElementById('mySnacks').innerHTML = listContent;
    }





    drawActiveSnack() {
        const snack = AppState.activeSnack
        let activeContent = snack.ActiveTemplate
        setHTML('activeSnack', activeContent)
    }

}



