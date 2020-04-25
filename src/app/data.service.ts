import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import{Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
@Injectable()

export class DataService{

    InternshipLists:any[];
    constructor(private http:Http){}

    FetchData()
    {
        return this.http.get('../assets/internship.json').map(
            (res)=>res.json()
        )
    }
}
