// Importar el núcleo de Angular
import {Component} from 'angular2/core'
import {CategoriasService} from '../services/categorias.service'


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector:    "categoriasList",
    templateUrl: "app/view/categoriasList.html",
    providers: [ CategoriasService ]
})


// Clase del componente donde iran los datos y funcionalidades
export class CategoriasListComponent{

    public categorias:string = "Listado de Categorias desde Component...";
    public datoCategoria:string = "";
    
    constructor( private _categoriasService : CategoriasService ){
        //this.categorias = "MODIFICADO...///";
        
        this.categorias = _categoriasService.getCategorias();
        
        //this.datoCategoria = "************";
    }
    
}
