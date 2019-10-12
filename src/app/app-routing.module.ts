import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutosComponent} from './produtos/produtos.component';
import {NovoProdutoComponent} from './novo-produto/novo-produto.component';
import{ContentComponent} from'./content/content.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';

/*const aqui adicionaremos links  para direcionar a uma coluna do site*/
const routes: Routes = [
  {
    path : 'produto', 
    component : ProdutosComponent
  },

  {
      path : 'novo-produto', 
      component : NovoProdutoComponent
  },

  {
    path : '', 
    component : ContentComponent  
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
