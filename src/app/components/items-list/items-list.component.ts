import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item.models';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  //Puedo usar el input libremete dentro de mi componente.
  @Input() title: string;
  //Array del tipo Item -> Modelo // Representa todos los productos.
  @Input() itemList: Item[];
  //Comunicación del hijo al padre -> EventEmitter 
  @Output() itemSelect: EventEmitter<Item>;

  //Inicializar en el constructor nueva estancia de EvenEmitter.
  constructor() { 
    this.itemSelect = new EventEmitter();
  }

  ngOnInit(): void {
  }
  //iItem-> Item
  add(iItem){
    //console.log(iItem);
    //Emito el producto que estoy recibiendo (iItem) hacia afuera.
    this.itemSelect.emit(iItem);
  }

}
