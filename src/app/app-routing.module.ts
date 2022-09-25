import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentoCreaeditaComponent } from './page/alimento/alimento-creaedita/alimento-creaedita.component';
import { AlimentoComponent } from './page/alimento/alimento.component';
import { BancoCreaeditaComponent } from './page/banco/banco-creaedita/banco-creaedita.component';
import { BancoComponent } from './page/banco/banco.component';
import { CitaComponent } from './page/cita/cita.component';
import { EjercicioCreaeditaComponent } from './page/ejercicio/ejercicio-creaedita/ejercicio-creaedita.component';
import { EjercicioComponent } from './page/ejercicio/ejercicio.component';
import { PlanCreaeditaComponent } from './page/plan/plan-creaedita/plan-creaedita.component';
import { PlanComponent } from './page/plan/plan.component';
import { PreguntaComponent } from './page/pregunta/pregunta.component';
import { RecetaCreaeditaComponent } from './page/receta/receta-creaedita/receta-creaedita.component';
import { RecetaComponent } from './page/receta/receta.component';
import { RegistroalimenticioComponent } from './page/registroalimenticio/registroalimenticio.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { TipousuarioCreaeditaComponent } from './page/tipousuario/tipousuario-creaedita/tipousuario-creaedita.component';
import { TipousuarioComponent } from './page/tipousuario/tipousuario.component';
import { UsuarioComponent } from './page/usuario/usuario.component';

const routes: Routes = [
  {
    path: 'alimentos', component: AlimentoComponent, children: [ 
      { path: 'edicion/:id', component: AlimentoCreaeditaComponent } ],
  },
  {
    path: 'alimento-creaedita',
    component: AlimentoCreaeditaComponent,
  },
  /*{
    path: 'alimentos/edicion/:id',
    component: AlimentoCreaeditaComponent,
  },*/
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'pregunta',
    component: PreguntaComponent,
  },
  {
    path: 'planes',
    component: PlanComponent,
    children: [{ path: 'edicion/:id', component: PlanCreaeditaComponent }],
  },
  {
    path: 'plan-creaedita',
    component: PlanCreaeditaComponent,
  },
  {
    path: 'recetas',
    component: RecetaComponent,
    children: [{ path: 'edicion/:id', component: RecetaCreaeditaComponent }],
  },
  {
    path: 'receta-creaedita',
    component: RecetaCreaeditaComponent,
  },
  {
    path: 'ejercicio',
    component: EjercicioComponent,
    children: [{ path: 'edicion/:id', component: EjercicioCreaeditaComponent }],
  },
  {
    path: 'ejercicio-creaedita',
    component: EjercicioCreaeditaComponent,
  },
  {
    path: 'banco',
    component: BancoComponent,
    children: [{ path: 'edicion/:id', component: BancoCreaeditaComponent }],
  },
  {
    path: 'banco-creaedita',
    component: BancoCreaeditaComponent,
  },
  {
    path: 'cita',
    component: CitaComponent,
  },
  {
    path: 'suscripcion',
    component: SuscripcionComponent,
  },
  {
    path: 'tipousuario',
    component: TipousuarioComponent,
   children: [{ path: 'edicion/:id', component: TipousuarioCreaeditaComponent }],
  },
  {
    path: 'tipousuario-creaedita',
    component: TipousuarioCreaeditaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
