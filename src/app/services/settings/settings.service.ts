import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

  interface Ajustes {
    temaUrl: string;
    tema: string;
  }

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(  @Inject(DOCUMENT) private _document  ) {
    this.LoadSettings();
   }

   saveSettings() {
        localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

    LoadSettings() {
    if ( localStorage.getItem('ajustes') ) {
        this.ajustes = JSON.parse (localStorage.getItem('ajustes'));
               this.aplicarTema( this.ajustes.tema );
    } else {
        this.aplicarTema( this.ajustes.tema );
    }

    const url = `assets/css/colors/${ this.ajustes.tema }.css`;
    this._document.getElementById('theme').setAttribute('href', url);
  }

  aplicarTema( tema: string ) {
    const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.saveSettings();
  }
}
