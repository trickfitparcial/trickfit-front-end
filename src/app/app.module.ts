import { EjercicioDialogoComponent } from './page/ejercicio/ejercicio-listar/ejercicio-dialogo/ejercicio-dialogo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AlimentoComponent } from './page/alimento/alimento.component';
import { AlimentoListarComponent } from './page/alimento/alimento-listar/alimento-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { PreguntaComponent } from './page/pregunta/pregunta.component';
import { PreguntaListarComponent } from './page/pregunta/pregunta-listar/pregunta-listar.component';
import { PlanComponent } from './page/plan/plan.component';
import { PlanListarComponent } from './page/plan/plan-listar/plan-listar.component';
import { RecetaComponent } from './page/receta/receta.component';
import { RecetaListarComponent } from './page/receta/receta-listar/receta-listar.component';
import { EjercicioComponent } from './page/ejercicio/ejercicio.component';
import { EjercicioListarComponent } from './page/ejercicio/ejercicio-listar/ejercicio-listar.component';
import { RegistroalimenticioComponent } from './page/registroalimenticio/registroalimenticio.component';
import { RegistroalimenticioListarComponent } from './page/registroalimenticio/registroalimenticio-listar/registroalimenticio-listar.component';
import { BancoComponent } from './page/banco/banco.component';
import { BancoListarComponent } from './page/banco/banco-listar/banco-listar.component';
import { CitaComponent } from './page/cita/cita.component';
import { CitaListarComponent } from './page/cita/cita-listar/cita-listar.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionListarComponent } from './page/suscripcion/suscripcion-listar/suscripcion-listar.component';
import { AlimentoCreaeditaComponent } from './page/alimento/alimento-creaedita/alimento-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from'@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { PlanCreaeditaComponent } from './page/plan/plan-creaedita/plan-creaedita.component';
import { RecetaCreaeditaComponent } from './page/receta/receta-creaedita/receta-creaedita.component';
import { EjercicioBuscarComponent } from './page/ejercicio/ejercicio-buscar/ejercicio-buscar.component';
import { EjercicioCreaeditaComponent } from './page/ejercicio/ejercicio-creaedita/ejercicio-creaedita.component';
import { TipousuarioComponent } from './page/tipousuario/tipousuario.component';
import { TipousuarioListarComponent } from './page/tipousuario/tipousuario-listar/tipousuario-listar.component';
import { TipousuarioDialogoComponent } from './page/tipousuario/tipousuario-listar/tipousuario-dialogo/tipousuario-dialogo.component';
import { TipousuarioBuscarComponent } from './page/tipousuario/tipousuario-buscar/tipousuario-buscar.component';
import { TipousuarioCreaeditaComponent } from './page/tipousuario/tipousuario-creaedita/tipousuario-creaedita.component';
import { BancoBuscarComponent } from './page/banco/banco-buscar/banco-buscar.component';
import { BancoCreaeditaComponent } from './page/banco/banco-creaedita/banco-creaedita.component';
import { BancoDialogoComponent } from './page/banco/banco-listar/banco-dialogo/banco-dialogo.component';
import { PlanBuscarComponent } from './page/plan/plan-buscar/plan-buscar.component';
import { PlanDialogoComponent } from './page/plan/plan-listar/plan-dialogo/plan-dialogo.component';
import { AlimentoBuscarComponent } from './page/alimento/alimento-buscar/alimento-buscar.component';
import { AlimentoDialogoComponent } from './page/alimento/alimento-listar/alimento-dialogo/alimento-dialogo.component';
import { RecetaBuscarComponent } from './page/receta/receta-buscar/receta-buscar.component';
import { RecetaDialogoComponent } from './page/receta/receta-listar/receta-dialogo/receta-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    AlimentoComponent,
    AlimentoListarComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    PreguntaComponent,
    PreguntaListarComponent,
    PlanComponent,
    PlanListarComponent,
    RecetaComponent,
    RecetaListarComponent,
    EjercicioComponent,
    EjercicioListarComponent,
    RegistroalimenticioComponent,
    RegistroalimenticioListarComponent,
    BancoComponent,
    BancoListarComponent,
    CitaComponent,
    CitaListarComponent,
    SuscripcionComponent,
    SuscripcionListarComponent,
    AlimentoCreaeditaComponent,
    PlanCreaeditaComponent,
    RecetaCreaeditaComponent,
    EjercicioCreaeditaComponent,
    EjercicioBuscarComponent,
    EjercicioDialogoComponent,
    TipousuarioComponent,
    TipousuarioListarComponent,
    TipousuarioDialogoComponent,
    TipousuarioBuscarComponent,
    TipousuarioCreaeditaComponent,
    BancoBuscarComponent,
    BancoCreaeditaComponent,
    BancoDialogoComponent,
    PlanBuscarComponent,
    PlanDialogoComponent,
    AlimentoBuscarComponent,
    AlimentoDialogoComponent,
    RecetaBuscarComponent,
    RecetaDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
