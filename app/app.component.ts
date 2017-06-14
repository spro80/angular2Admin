// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {EncabezadoComponent} from "./components/encabezado.component";
import {MenuComponent} from "./components/menu.component";
import {CategoriasListComponent} from "./components/categoriasList.component"
import {FooterComponent} from "./components/footer.component";

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    //template: '<h1>Hola mundo con Angular 2 !! </h1>',
    templateUrl: 'app/view/inicio.html',
    directives: [ EncabezadoComponent, MenuComponent, FooterComponent, CategoriasListComponent ]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 


}
