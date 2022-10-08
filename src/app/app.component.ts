// Fichier : error.component.ts
// Auteur : Davis Eath
// Date : 2020-09-16
// But : Gérer l'état de l'application (mode entrée de citation/affichage de la grille)

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quote: string;
  inputContext: boolean = true;

  /**
   * Méthode handler pour le retour vers la saisie de la citation
   */
  recieveReset() {
    this.quote = '';
    this.inputContext = true;
  }

  /**
   * Méthode handler pour la soumission de la citation
   * @param quote La citation de l'utilisateur
   */
  recieveQuote(quote: string) {
    this.quote = quote;
    this.inputContext = false;
  }
}
