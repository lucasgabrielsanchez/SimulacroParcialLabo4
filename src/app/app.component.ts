import { Component, OnInit } from '@angular/core';
import { PeliculaCRUDService } from './servicios/pelicula-crud.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelicula } from './clases/pelicula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'projectTest';

  constructor(private _peliculaCRUDService: PeliculaCRUDService) {}

  ngOnInit() {
    this._peliculaCRUDService.getPeliculas().subscribe((resultado) => {
      resultado.forEach((pelicula: any) => {
        // this.cats.push({
        //   id: catData.payload.doc.id,
        //   data: catData.payload.doc.data()
        // });
        console.log('data: ', pelicula.payload.doc.data());
      });
    });

    // Ejemplo:
    // this.firestoreService.getCats().subscribe((catsSnapshot) => {
    //   this.cats = [];
    //   catsSnapshot.forEach((catData: any) => {
    //     this.cats.push({
    //       id: catData.payload.doc.id,
    //       data: catData.payload.doc.data(),
    //     });
    //   });
    // });
  }
}
