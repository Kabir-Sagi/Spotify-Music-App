import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';


const routes: Routes = [
  { path : '' , component : HomeComponent , pathMatch : 'full' },
  { path : 'about' , component : AboutComponent , pathMatch : 'full' },
  { path : 'artists/:id' , component : ArtistComponent , pathMatch : 'full' },
  { path : 'albums/:id' , component : AlbumComponent , pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
