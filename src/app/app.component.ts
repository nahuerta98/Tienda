import { Component, OnInit } from '@angular/core';
//Importe del Modelo
import { Item } from './models/item.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Array del tipo Item[] -> Modelo 
  items: Item[];
  //Array de todos los productos.
  totalItems: Item[];

  //Inicializar arrays en el constructor
  constructor() {

    this.items = [
      //Dentro del array, van objetos del tipo Item.
      new Item('Coca-Cola', 'https://www.chedraui.com.mx/medias/7501055300075-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8MTQwODUzfGltYWdlL2pwZWd8aDRjL2g4NS8xMDI1MDUwNDk5NDg0Ni5qcGd8MTNiZmZiMzM4NGMyNDYzMDEyMDExOTdhMGZlNDFmYWE5YjhhOWIwMjI3ZGMzZDRjYTIxZjFmMDQ5NWRhNDlkNg', 12.50, 80),
      new Item('Pan Bimbo', 'https://resources.claroshop.com/medios-plazavip/s2/11073/1287264/5dfa7cce2bf8c-00750100011120-1600x1600.jpg', 37.65, 45),
      new Item('Paquetaxo', 'https://www.chedraui.com.mx/medias/7501011155008-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8MTI5MDU2fGltYWdlL2pwZWd8aDBjL2gwMS8xMDgyMzcyNDM2NzkwMi5qcGd8YzJjOWQxNDNkMzY0NDMwZTRhM2VjMDk4MDIzMTMxYjViYTRjODJjZDcwMjk3NGU4NjFhNDgzZTFhNzE4NmVkYQ', 38.50, 60),
      new Item('Chicle Totito', 'https://cdn.shopify.com/s/files/1/0089/3141/0020/products/TotitoAmarillo2_27baf6c1-3c9f-4af3-9aa5-86895985745c_1280x1280.jpg?v=1565643357', 1.50, 100),
      new Item('Gansito', 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750100015310L.jpg', 12.50, 75)
    ]
    this.totalItems = [];
  }

  onItemSelect($event){
    //console.log($event);
    //this.totalItems.push($event);
    const discountItem = this.totalItems.find(item => item.name === $event.name);

    if (discountItem){
      discountItem.qty++;
    }
    else{
      $event.qty = 1;
      this.totalItems.push($event);
    }
  }

}
