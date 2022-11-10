import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './bikes/presentation/home/home.component';
import { ResultComponent } from './bikes/presentation/result/result.component';

const routes: Routes = [
  {
    path: "", redirectTo: "/home", pathMatch: "full"
  },
  { path: "home", component: HomeComponent, data: {title: "Home"}},
  { path: "result", component: ResultComponent, data: {title: "Resultados de Busqueda"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
