import { Component, OnInit } from '@angular/core';
import { Entree } from 'src/app/shared/interfaces/entree';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public entryList: Entree[];

  constructor() { 
    this.entryList = [
      {
        title: 'Introducción a Angular',
        abstract: 'En esta lección no se qué'
      },
      {
        title: 'Typescript como lenguaje en Angular',
        abstract: 'cosa de ts y tal'
      },
      {
        title: 'Componentes en Angular',
        abstract: 'se aprende a tal y cual'
      }
    ]
  }

  ngOnInit(): void {
  }

  public showTitle(title: string): void {
    alert(`Entrada seleccionada: ${ title }.`);
  }

}
