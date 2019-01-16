import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService 
{  constructor(private http:HttpClient)
   {}

    getQuery(query:string){	
  	    const url = `https://api.spotify.com/v1/${ query }`;
  	    const headers = new HttpHeaders({
  		  'Authorization':'Bearer BQBkfxucr9mJayAYXvr2PUfV10dwC8pXnyK4RHZxDxgINxNxol6vM03rDN9vTt_M2vF3D23PHnVQ9FUi3Hc'
  	    });

  	     return this.http.get(url,{ headers });
    }

    getNewReleases(){
  	     return  this.getQuery('browse/new-releases?limit=30').pipe(map(data=>data['albums'].items));
    }

    getArtistas(termino:string){
  	    return  this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe(map(data=>data['artists'].items));
    }

    getArtista(id:string){
        return  this.getQuery(`artists/${id}`);
    }

    getTopTracks(id:string){
        return  this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe(map(data => data['tracks']));
    }
    
}
