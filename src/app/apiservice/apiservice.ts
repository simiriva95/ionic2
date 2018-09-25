import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { LotusClient } from '../common/LotusClient';
import { IonicClient } from '../common/IonicClient';


@Injectable()
export class ApiService {
    private _apiUrl: string;
    private _portalName: string = 'NomePortale';
    constructor(private _http: Http) {
        //this._apiUrl = 'http://gestioneassunzioni/';
        this._apiUrl = 'http://127.0.0.1/Ionic';
    }
    public GetLogin(): Promise<IonicClient.Test> {
        return new IonicClient.LoginClient(this._http, this._apiUrl).get().toPromise();
    }
}