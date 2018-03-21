import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import {Whisper} from '../models/whisper.model';
// https://whispers-api.herokuapp.com
const API_URL = 'http://127.0.0.1:3000';

@Injectable()
export class ApiService {


  constructor(private http: Http) { }

  getWhispers() {
    return this.http.get(`${API_URL}/all_whispers`).map(res => res.json());
  }

  addWhisper(whisper: Whisper) {
    let params = new URLSearchParams();
    params.append('text', whisper.text);
    params.append('author', whisper.author);

    return this.http.post(`${API_URL}/new_whisper`, params).map(res => res.json());
  }

  giveLove(whisper: Whisper) {
    return this.http.put(`${API_URL}/giveLove/${whisper._id}`, {}).map(res => res.json());
  }



}
