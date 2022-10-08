// Fichier : lower-grid.component.ts
// Auteur : Davis Eath
// Date : 2020-09-16
// But : Afficher les cases grises et noires pour la partie du bas de la grille

import { Component, OnInit, Input } from '@angular/core';
import { Character } from './../models/character';

@Component({
  selector: 'app-lower-grid',
  templateUrl: './lower-grid.component.html',
  styleUrls: ['./lower-grid.component.css']
})
export class LowerGridComponent implements OnInit {

  @Input() characters: Character[];
  @Input() columnCount: number;

  grid: Character[][] = [];

  constructor() { }

  ngOnInit(): void {
    this.fillGrid();
  }

  /**
   * Traite la citation pour l'afficher en cases grises ou noires
   */
  fillGrid(): void {
    const rowCount = Math.ceil(this.characters.length / this.columnCount);

    for (let i = 0; i < rowCount; i++) {
      let row: Character[] = [];

      // index j = index du caractère de la citation
      for (let j = i * this.columnCount; j < (i + 1) * this.columnCount; j++) {
        // on arrête la boucle lorsqu'on a traité tous les caractères de la citation
        if (j >= this.characters.length) {
          break;
        }

        row.push(this.characters[j]);
      }

      this.grid.push(row);
    }
  }

}
