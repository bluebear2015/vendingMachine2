

export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }


    get snackTemplate() {
        return `
    <div class="col-4 bg-secondary text-dark text-bold rounded elevation-5 m-2 p-2 text-center">
    <img class="h-50 w-50 img-fluid m-2 border border-light elevation-3" src="${this.imgUrl}" alt="">
    <div> ${this.price} ${this.name} </div>
  
    <button onClick = "app.VendingController.selectSnack('${this.name}')" class="btn btn-light m-2" >buy snack</button>
    </div>
    
    `
    }

    get snack2Template() {
        return `
    <div class="col-4 bg-secondary text-dark text-bold rounded elevation-5 m-2 p-2 text-center mySnacks">
    <img class="h-50 w-50 img-fluid m-2 border border-light elevation-3" src="${this.imgUrl}" alt="">
    <div> ${this.price} ${this.name} </div>
  
    </div>
    
    `
    }

    get ActiveTemplate() {
        return `
          <div class="col-4 bg-secondary text-dark text-bold rounded elevation-5 m-2 p-2 text-center">
          <div><h1>My Snacks</h1> </div>
            <img src="${this.imgUrl}" class="h-50 w-50 img-fluid m-2 border border-light elevation-3 ${this.price}"/>
            <p class="text-center fw-bold fs-3">${this.name} ${this.price}</p>
          </div>
        `
    }


}