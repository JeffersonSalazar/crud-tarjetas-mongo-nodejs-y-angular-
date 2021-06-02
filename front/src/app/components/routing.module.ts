import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ruta de los componentes
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';


const routes: Routes = [
  { path: 'tablePet', component: TableComponent },

  // componente reutilizable 
  { path: 'formPet', component: FormComponent },
  { path: 'editPet/:id', component: FormComponent },
  
  // componente de redireccion
  { path: '**', pathMatch: 'full', redirectTo: 'tablePet' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoutingModule {}
