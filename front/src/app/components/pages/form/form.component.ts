import { Component, OnInit } from '@angular/core';

/* 
  linea 8 modelo de datos 
  linea 9 servicio
  liena 10 modulos router y activatedRoute
*/
import { Pets } from '../../pets';
import { PetsService } from "../../pets.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  // variables para hacer el cambio de texto del titulo y el boton
  title: string = 'Nuevo Color';
  btnTitle: string = 'Guardar';

  // varibale para almacenar los datos ingresados en los inputs 
  formPet: Pets = {
    nombre: '',
    raza: '',
  };

  // variable definida para hacer la validacion
  fieldsRequire: boolean;

  /*
    esta variable la definimos para posteriormente almacenarle
    un tipo de dato y ese dato lo utilizaremos para ejecutar 
    un metodo acorde a la accion a realizar (guardar o actualizar)
  */
  action: string | null;

  constructor
  (
    private _petServ: PetsService,
    private _router: Router, private _activated: ActivatedRoute
  ) 
  {
    /* 
      despues de inyectar activatedRoute este nos permite usar
      sus propiedades las cuales vemos en la linea 52, estos
      nos permiten almacenar en la variable un null si no le pasamos
      un id y un string si le pasamos un id
    */
    this.action = this._activated.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.edit(); //=> metodo ejecutado por el ngOnInit
  }

  /*
    aqui definimos el metodo del boton del formulario
    en la linea 69 tenemos un condicional donde preguntamos
    que si los campos del formulario estan vacios nos muestre 
    la validacion y retorne el formulario.
    en la linea 74 definimos otro condicional que ejecuta
    la accion en el formulario segun el tipo de dato 
    que tenga la variable action en ese momento
  */
  saveUpdate() {
    if(this.formPet.nombre === '' || this.formPet.raza === ''){
      this.fieldsRequire = true;
      return this.formPet;
    };

    if(this.action === null) { // si el condicional se cumple se ejecuta el metodo save
      this.save(); 
    } else { // si el condicional no se cumple se ejecuta el metodo update
      this.update();
    }
  }

  /*
    aqui definimos un metodo para agregar, en la linea 88 utilizamos 
    el metodo addPet() definido en el servicio 
    al cual le pasamos como parametro los valores del formPet,
    si la accion es correcta este nos redirige al TableComponent
  */
  save() {
    this._petServ.addPet(this.formPet).subscribe(
      res => {
        this._router.navigate(['/tablePet']);
      },err => console.log(err)
    );
  }

   /*
    aqui definimos un metodo para actualizar, en la linea 103 
    tilizamos el metodo updatePet() definido en el servicio en el cual
    le pasamos como parametro el id alamacenado en la variable action y 
    los valores del formPet si la accion es correcta este nos 
    redirige al TableComponent
  */
  update() {
    this._petServ.updatePet(this.action, this.formPet).subscribe(
      res => {
        this._router.navigate(['/tablePet']);
      },err => console.log(err)
    );
  }

  /*
    aqui definimos un metodo editar que es ejecutado por el
    ngOnInit este metodo atravez de un condicional nos dice
    que si la variable action es diferente a null cambie el valor
    de las variables title y btntitle posterior a esto
    en la linea 125 decimos que ejecute el metodo editPet 
    definido en el servicio donde le pasamos el valor almacenado 
    en action nuevamente por ultimo le decimos al formulario 
    que guarde la respuesta de la base de datos
  */
  edit() {
    if(this.action !== null) {
      this.title = 'Actualizar Pets'; 
      this.btnTitle = 'Actualizar';

      this._petServ.editPet(this.action).subscribe(
        res => this.formPet = res,
        err => console.log(err)
      );
    };
  }
}
