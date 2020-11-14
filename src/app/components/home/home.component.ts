import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchQuery:string = null;
  public artists;

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }

  // search Artists
  public searchArtists(){
    this._spotifyService.getAllArtists(this.searchQuery).subscribe((data) => {
      this.artists = data.artists.items;
    });
  }

}
