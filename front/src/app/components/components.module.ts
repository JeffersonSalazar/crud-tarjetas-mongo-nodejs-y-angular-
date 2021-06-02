import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing personalizado para los componentes
import { RoutingModule } from './routing.module';

// modulo utilizado para la conexion con el api
import { HttpClientModule } from "@angular/common/http";

// modulo para el uso de formularios
import { FormsModule } from "@angular/forms";

// componentes de la aplicacion
import { TableComponent } from "./pages/table/table.component";
import { FormComponent } from "./pages/form/form.component";


@NgModule({
  declarations: [
    TableComponent,
    FormComponent
  ],

  imports: [
    CommonModule,
    RoutingModule,

    HttpClientModule,
    
    FormsModule
  ],

  exports: [
    TableComponent,
    FormComponent
  ]
})

export class ComponentsModule {}
