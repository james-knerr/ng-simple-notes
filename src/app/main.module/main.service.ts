import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { NoteVM } from '../shared.module/models/note-vm';

@Injectable()
export class MainService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiUrl = 'api';  // URL to web api

    constructor(private _httpClient: HttpClient) { }

    public getNotes(): Observable<NoteVM[]> {
        return this._httpClient.get<NoteVM[]>(`${this.apiUrl}/NOTES`);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}