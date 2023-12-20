import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Language } from '../shared/classes/language';
import { API_LANGUAGES_URL } from '../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private apiURL = API_LANGUAGES_URL;
  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Language[]>{
    return this.http.get<{ result: Language[] }>(this.apiURL).pipe(
      map(response => response.result)
    );
  }
}
