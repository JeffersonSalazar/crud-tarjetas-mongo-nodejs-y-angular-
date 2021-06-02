import { Component, OnInit } from '@angular/core';

/* 
  linea 7 modelo de datos 
  linea 8 servicio
*/
import { Pets } from "../../pets";
import { PetsService } from "../../pets.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  /*
    variable que almacena la informacion alojada 
    en la base de datos, la cual utilizamos para
    mostrar por pantalla
  */
  pets: Pets[] = [];

  constructor(private _petServ: PetsService) {}

  ngOnInit() {
    this.apiPets(); //=> metodo que es ejecutado por ngOnInit
  }

  /*
    este metodo utiliza el servicio para asi
    acceder al metodo getPets que nos permite
    guardar en una variable la informacion que tiene
    la base de datos 
  */
  apiPets() {
    this._petServ.getPets().subscribe(
      res => this.pets = res,
      err => console.log(err)
    )
  };

  /*
    aqui definimos el metodo para eliminar un dato, 
    este atravez del servicio accede al metodo deletePets 
    recibiendo un id como parametro con el cual
    procedemos a eliminar el dato solicitado por el usuario
  */
  delete(idPet: Pets) {
    this._petServ.deletePet(idPet).subscribe(
      res => {
        this.apiPets();
      },err => console.log(err)
    )
  };
}
