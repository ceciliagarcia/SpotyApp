import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
// import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

  // paises: any [] = [];
 nuevasCanciones: any [] = [];
 loading: boolean;

  constructor( private spotify: SpotifyService /*private http: HttpClient*/) { 

   /* this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (resp: any) =>{
      this.paises = resp;
      console.log(resp);
    });*/
    this.loading = true;

    this.spotify.getNewReleases()
    .subscribe ( (data: any) => {
    this.nuevasCanciones = data;
    this.loading = false;
    });
  }



}
