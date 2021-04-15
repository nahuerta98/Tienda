export class Item {
    
    name: string;
    img: string;
    price: number;
    qty: number;

    constructor( iName: string, iImg: string, iPrice: number, iQty: number){
        this.name = iName;
        this.img = iImg;
        this.price = iPrice;
        this.qty = 0;
    }
}