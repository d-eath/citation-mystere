// Fichier : upper-grid.component.ts
// Auteur : Davis Eath
// Date : 2020-09-16
// But : Mélanger les lettres des colonnes dans la partie du haut de la grille et les afficher

import { Component, OnInit, Input } from '@angular/core';
import { Character } from './../models/character';

@Component({
  selector: 'app-upper-grid',
  templateUrl: './upper-grid.component.html',
  styleUrls: ['./upper-grid.component.css']
})
export class UpperGridComponent implements OnInit {

  @Input() characters: Character[];
  @Input() columnCount: number;

  columns: Character[][] = [];

  constructor() { }

  ngOnInit(): void {
    this.fillColumns();
  }

  /**
   * Traite la citation pour afficher les lettres mélangés dans les colonnes en haut
   */
  fillColumns(): void {
    let currentIndex = 0;
    
    for (let i = 0; i < this.columnCount; i++) {
      this.columns[i] = [];
    }

    for (let character of this.characters) {
      if (currentIndex === this.columns.length) {
        currentIndex = 0;
      }

      if (character.isSpecial()) {
        currentIndex++;

        continue;
      }

      this.columns[currentIndex].push(character);

      currentIndex++;
    }

    for (let i = 0; i < this.columnCount; i++) {
      this.columns[i] = this.shuffleColumn(this.columns[i]);
    }
  }

  /**
   * Fonction qui mélange un tableau de caractères
   * Utilise le mélange de Fisher-Yates :
   * https://fr.wikipedia.org/wiki/M%C3%A9lange_de_Fisher-Yates
   * @param column Le tableau à mélanger
   */
  shuffleColumn(column: Character[]): Character[] {
    for (let i = column.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [column[i], column[j]] = [column[j], column[i]];
    }

    return column;
  }
}
