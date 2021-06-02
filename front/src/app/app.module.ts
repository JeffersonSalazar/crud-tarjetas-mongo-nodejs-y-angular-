import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing principal
import { AppRoutingModule } from './app-routing.module';

// componente principal
import { AppComponent } from './app.component';

// modulo personalizado para los componentes
import { ComponentsModule } from "./components/components.module";

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,

    ComponentsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule {}
