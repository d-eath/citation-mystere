// Fichier : error.component.ts
// Auteur : Davis Eath
// Date : 2020-09-16
// But : Afficher une alerte lorsque l'utilisateur soummet une citation invalide

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }
}
