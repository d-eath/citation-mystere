// Fichier : grids.component.ts
// Auteur : Davis Eath
// Date : 2020-09-16
// But : Traiter la citation et l'émettre dans les deux parties de la grille (components)

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from './../models/character';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css']
})
export class GridsComponent implements OnInit {
  @Input() quote: string;
  @Output() resetEvent: EventEmitter<void> = new EventEmitter();

  characters: Character[];
  columnCount: number;

  constructor() { }

  ngOnInit(): void {
    this.characters = this.filterQuote(this.quote);
    this.columnCount = this.chooseColumnCount(this.characters);
  }

  /**
   * Retounre vers la saisie de citation
   */
  resetApp(): void {
    this.resetEvent.emit();
  }

  /**
   * Filtre une citation en enlevant les caractères séparateurs en doublons
   * @param quote La citation à filtrer
   * @returns La citation filtrée en tableau de Character
   */
  filterQuote(quote: string): Character[] {
    let result: Character[] = [];

    // traitement de chaque caractère individuellement dans une boucle
    for (let i = 0; i < quote.length; i++) {
        // regex permettant de déterminer si un caractère est alphanumérique
        let special: boolean = !/^[A-Z0-9]$/.test(quote[i]);
        // si le caractère n'est pas alphanumérique, on passe true (special) au constructeur, sinon on passe le caractère en question
        let char: Character = new Character(special || quote[i]);
        // obtient le dernier caractère du résultat
        let lastChar: Character = result.slice(-1)[0];

        // si le dernier caractère + le caractère actuel = non-alphanumérique, on n'ajoute pas le caractère actuel au résultat
        if (lastChar && char.isSpecial() && lastChar.isSpecial()) {
          continue;
        }

        result.push(char);
    }

    return result;
  }

  /**
   * Retourne le nombre optimal de colonnes à utiliser pour avoir le moins de mots tronqués possible
   * @param chars Les caractères de la citation
   * @returns Le nombre de colonnes à utiliser pour la citation
   */
  chooseColumnCount(chars: Character[]): number {
    let results: { columnCount: number, breakCount: number }[] = [];

    // on teste le nombre de troncatures pour chaque nombre de colonnes possible (de 13 à 17) 
    for (let i = 13; i <= 17; i++) {
      let breakCount : number = 0;

      for (let j = 1; j * i < chars.length; j++) {
        // on peut déterminer si un mot est tronqué lorsque:
        // - le dernier caractère de la ligne est alphanumérique (non-spécial); et
        // - le premier caractère de la prochaine ligne est alphanumérique (non-spécial)
        if (!chars[i * j - 1].isSpecial() && !chars[i * j].isSpecial()) {
          breakCount++;
        }
      }

      results.push({columnCount: i, breakCount});
    }

    // on trie les résultats par le nombre de troncatures
    results = results.sort((a, b) => a.breakCount - b.breakCount);
    // on enlève les résultats n'ayant pas de nombre de troncatures égal au nombre du premier résultat
    // il ne reste donc que les résultats ayant le nombre minimal de troncature
    results = results.filter(r => r.breakCount === results[0].breakCount);

    // on choisit un des résultats finaux aléatoirement 
    let random: number = Math.floor(Math.random() * results.length);

    return results[random].columnCount;
  }

}
