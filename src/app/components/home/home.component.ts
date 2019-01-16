import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading:boolean;
  error:boolean;
  mensaje:string;

  constructor(private spoty:SpotifyService ){
    this.mensaje = "";
  	this.error = false;
    this.loading = true;
  	this.spoty.getNewReleases().subscribe((data:any) => { 
  	          	this.nuevasCanciones = data; 
  	          	this.loading = false;
  	          },
                (errorServicio => {
                  this.mensaje = errorServicio.error.error.message;
                  this.error = true;
                  this.loading = false;
                })
              );
  	
  }

}
