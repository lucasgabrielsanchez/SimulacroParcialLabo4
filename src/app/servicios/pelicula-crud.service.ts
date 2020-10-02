import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculaCRUDService {
  constructor(private _angularFirestore: AngularFirestore) {}

  getPeliculas() {
    return this._angularFirestore.collection('Peliculas').snapshotChanges();
  }
}
