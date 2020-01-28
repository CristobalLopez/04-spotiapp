import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAzPKEYa3AZZQVt21j0Bwzz2nHtRDcIn6G5MFha5Fa4GUrMz-Zrpy5vgY5ALp1T1yCK-Cgav-08wL5DrDs'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20').pipe( map( data=> data['albums'].items ));

  }

  getArtist(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( data=> data['artists'].items));
  }
}
