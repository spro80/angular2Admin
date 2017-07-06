import {Injectable} from 'angular2/core'
import {Http, Response}           from 'angular2/http';
import "rxjs/add/operator/map"
import {Headers, RequestOptions}  from 'angular2/http';
import {Observable}               from 'rxjs/Observable';
import {Categoria} from '../model/categoria';

@Injectable()
export class CategoriasService{

    constructor (private _http: Http) {}
	
    getCategorias(){
        
        return "RETORNANDO CATEGORIAS 2 DESDE SERVICE con http...";
    }

}
