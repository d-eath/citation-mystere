// Fichier : quote-input.component.ts
// Auteur : Davis Eath
// Date : 2020-09-16
// But : Demander une citation à l'utilisateur et l'envoyer au noyau de l'application

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-input',
  templateUrl: './quote-input.component.html',
  styleUrls: ['./quote-input.component.css']
})
export class QuoteInputComponent implements OnInit {

  quote: string = '';
  error: string = '';
  charCount: number = 0;

  @Output() submitEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Méthode handler qui est appelé lorsque le champ de texte reçoit une touche
   * @param value La chaîne de caractères contenant l'entrée de l'utilisateur
   */
  input(value: string): void {
    this.quote = value;
    this.charCount = this.length(value);
  }

  /**
   * Retourne le nombre de caractères dans un chaîne en ignorant les séparateurs en doublons
   * @param value La chaîne à traiter
   */
  length(value: string): number {
    let charCount: number = 0;
    let lastSpecial: boolean = false;

    for (let i = 0; i < value.length; i++) {
      // caractère séparateur/spécial = caractère non-alphanumérique
      if (!/^[A-Za-z0-9]$/.test(value[i])) {
        // on compte le séparateur seulement si le caractère précédent n'est pas un séparateur (donc alphanumérique)
        if (!lastSpecial) {
          lastSpecial = true;
          charCount++;
        }

        continue;
      }

      lastSpecial = false;
      charCount++;
    }

    return charCount;
  }

  /**
   * Méthode handler qui est appelé lorsque l'utilisateur soummet la citation
   */
  submit(): void {
    // empêcher de soumettre si le bouton pour soumettre est désactivé
    if (this.submitState() !== null) {
      return;
    }

    if (this.length(this.quote) < 35) {
      this.error = 'La citation doit contenir un minimum de 35 caractères.';
      return;
    }

    if (this.length(this.quote) > 100) {
      this.error = 'La citation doit contenir un maximum de 100 caractères.';
      return;
    }

    for (let i = 0; i < this.quote.length; i++) {
      if (this.quote.charCodeAt(i) >= 128) {
        this.error = 'La citation ne doit pas contenir de caractères accentués ou diacritiques.';
        return;
      }
    }

    this.error = '';
    this.submitEvent.emit(this.quote.toLocaleUpperCase());
  }

  /**
   * Méthode qui détermine si le bouton pour soumettre devrait être désactivé
   */
  submitState(): string | null {
    return this.quote.length > 0 ? null : '';
  }
}
