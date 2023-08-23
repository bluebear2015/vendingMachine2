import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { VendingController } from "./controllers/VendingController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: [HomeController, VendingController],
    view: /*html*/`
   <section class="row justify-content-center" id="snacks"></section>
   <section class="row justify-content-center" id="activeSnack"></section>
   <section class="row justify-content-center" id="mySnacks"></section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]