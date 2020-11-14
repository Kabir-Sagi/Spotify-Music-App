import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albumId;
  public album;
  public tracks;
  constructor(private _activatedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService,
              private _router:Router) { }

  ngOnInit(): void {
    // get albumId from the browser URL
    this._activatedRoute.paramMap.subscribe((paramMap:ParamMap) => {
      this.albumId = paramMap.get('id');
    });

    // get an album from the service
    this._spotifyService.getAlbum(this.albumId).subscribe((data) => {
      this.album = data;
    });

    // get all Tracks of an Album from the service
    this._spotifyService.getAllTracks(this.albumId).subscribe((data) => {
      this.tracks = data.items;
    });
  }

  // backToArtist
  public backToArtist(){
    this._router.navigate([`/artists/${this.album.artists[0].id}`]);
  }

}
