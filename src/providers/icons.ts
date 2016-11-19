import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Icon} from "../models/icon";

@Injectable()
export class Icons {
    constructor(public http: Http) { }

    load(): Observable<Icon[]> {
        return this.http.get('assets/data/icons.min.json')
            .map(res => <Icon[]>res.json().icons);
    }
}
