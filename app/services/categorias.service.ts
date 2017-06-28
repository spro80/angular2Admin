import {Injectable} from 'angular2/core'
import {Http, Response}           from 'angular2/http';
import {Headers, RequestOptions}  from 'angular2/http';
import {Observable}               from 'rxjs/Observable';

@Injectable()
export class CategoriasService{

    constructor (private http: Http) {}
	
    getCategorias(){
        return "RETORNANDO CATEGORIAS 2 DESDE SERVICE con http...";
    }

}
