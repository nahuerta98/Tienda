import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item.models';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  resultado: number = 0;
  alertaPagoCompleto = false;
  monto: number = 0;


  //Array de todos los productos.
  @Input() total: Item[];


  constructor() { }

  ngOnInit(): void {
  }

  calcTotal(){
    this.resultado = 0;
    for( let item of this.total){
      this.resultado += (item.price * item.qty);
    }

    return this.resultado;
  }

  deleteItem(indice){
    if(this.total[indice].qty === 1){
    this.total.splice(indice,1);
    } else {
      this.total[indice].qty--;
    }
  }

 




}
