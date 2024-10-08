import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Movie } from '../interfaces/movie';
import { BASE_URL } from '../app-config';
import { FullMovie } from '../interfaces/full-movie';


const API_KEY = environment.OMDB_API_KEY;

@Injectable({
  providedIn: 'root'
})


export class HttpomdbService {
  

  constructor( private http : HttpClient) { }

  public getPeliculas(title : string) : Observable<any> {
    return this.http.get( `${BASE_URL}?apikey=${API_KEY}&s=${title}`).pipe(
      delay(1000))
  }

  public getPelicula(imdbID : string) : Observable<FullMovie> {
    return this.http
      .get<FullMovie>(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`)
  }
}
