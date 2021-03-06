import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';//libreria para el uso de firebase 

//libreria para formulario de contacto
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

import { CountUpModule } from 'ngx-countup';// este es para el efecto de que los numeros se cuenten rapdio//este para el efecto de movimiento de las barras

//servicios

import { DataDbService } from './services/data-db.service';








//componentes 
import { AppComponent } from './app.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumenComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//libreria para el uso de firebase 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    CountUpModule//este para el efecto de movimiento de las barras

  ],
  providers: [
    DataDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
