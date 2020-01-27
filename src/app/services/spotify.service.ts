import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD-EyCHhSfd_YDothcCznhfaOwghxsUeMHBgkITCf6cqXfIC6bIpr2g8EhE1vxo9djSQTma_gAvL5ddSQE'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});

  }

  getArtist(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD-EyCHhSfd_YDothcCznhfaOwghxsUeMHBgkITCf6cqXfIC6bIpr2g8EhE1vxo9djSQTma_gAvL5ddSQE'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
