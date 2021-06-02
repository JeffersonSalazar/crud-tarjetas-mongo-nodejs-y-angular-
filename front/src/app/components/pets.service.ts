import { Injectable } from '@angular/core';

/* 
  a: modelo de datos / b: modulo http
  c: observables
*/
import { Pets } from "./pets";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PetsService {

  // variable que almacena la url de la api
  url: string = 'http://localhost:3000/pets';

  constructor(private _http: HttpClient) {}

  /*
    de la linea 26/28 encontramos el metodo para 
    obtener la informacion almacenada en la base de datos 
  */
  getPets(): Observable<any> {
    return this._http.get<Pets[]>(`${this.url}`);
  };

  /*
    de la linea 34/40 encontramos los metodos de eliminar y editar,
    de estos hace uso el componente TableComponent
  */
  deletePet(idPet: Pets): Observable<any> {
    return this._http.delete(`${this.url}/${idPet._id}`)
  };

  editPet(idPet: string): Observable<any> {
    return this._http.get<Pets>(`${this.url}/${idPet}`);
  };

  /*
    de la linea 46/52 encontramos los metodos de agregar
    y actualizar, de estos hace uso el componente FormComponent
  */
  addPet(newPet: Pets): Observable<any> {
    return this._http.post(`${this.url}`, newPet);
  };

  updatePet(idPet: string, updatePet: Pets): Observable<any> {
    return this._http.put(`${this.url}/${idPet}`, updatePet)
  };
}
