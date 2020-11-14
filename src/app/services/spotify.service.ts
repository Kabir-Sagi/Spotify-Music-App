import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private authorizationKey = 'Bearer BQD9NXQnqrbMViiw6JusU-KKXgcG0GottgAPTdgI-bEEowBy6x3vIGzR5ubtEkN-KgdhvWrmSWWSUPzJGyGW7hvJEADcPxra2aMsZcB-z-pcABOYcTTICp0tZ7nLRH_K4nKv1FSEc8gOhsz0bJvQW26FzvjuS-LcQAbw2_vvdGLRNLS0LV4wk2n5qS-a_yKSPx1Jx384vsMSAQ_5CCzwBNAjbvkh5g';

  private httpOptions = {
    headers : new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'Authorization' : this.authorizationKey
    })
  };

  constructor(private _httpClient:HttpClient) { }

  // get all Artists
  public getAllArtists(searchQuery):Observable<any>{
    let artistURL = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`;
    return this._httpClient.get<any>(artistURL,this.httpOptions);
  }

  // get a single artist
  public getArtist(artistId):Observable<any>{
    let artistURL = `https://api.spotify.com/v1/artists/${artistId}`;
    return this._httpClient.get<any>(artistURL,this.httpOptions);
  }

  // get All Albums
  public getAllAlbums(artistId):Observable<any>{
    let albumURL = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this._httpClient.get<any>(albumURL,this.httpOptions);
  }

  // get a Single Album
  public getAlbum(albumId):Observable<any>{
    let albumURL = `https://api.spotify.com/v1/albums/${albumId}`;
    return this._httpClient.get<any>(albumURL,this.httpOptions);
  }

  // get All Tracks
  public getAllTracks(albumId):Observable<any>{
    let tracksURL = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
    return this._httpClient.get<any>(tracksURL,this.httpOptions);
  }
}
