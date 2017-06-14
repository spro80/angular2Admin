// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {EncabezadoComponent} from "./components/encabezado.component";
import {MenuComponent} from "./components/menu.component";
import {LoginComponent} from "./components/login.component"
import {CategoriasListComponent} from "./components/categoriasList.component"
import {FooterComponent} from "./components/footer.component";

import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router"

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    //template: '<h1>Hola mundo con Angular 2 !! </h1>',
    templateUrl: 'app/view/inicio.html',
    directives: [ EncabezadoComponent, MenuComponent, FooterComponent, CategoriasListComponent, LoginComponent,
                  ROUTER_DIRECTIVES
                ]
})



@RouteConfig([
    { path: "/login"      , name: "Login"      , component: LoginComponent },
    { path: "/categorias" , name: "Categorias" , component: CategoriasListComponent }
])


 
 

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 


}
