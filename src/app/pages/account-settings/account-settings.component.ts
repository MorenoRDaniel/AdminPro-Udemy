import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document ) { }

  ngOnInit() {

  }

  cambiarColor( tema: string, link: any) {
    this.aplicarCheck( link );
    const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('theme').setAttribute('href', url);

  }

  aplicarCheck( link: any) {

    const selectores: any  = document.getElementsByClassName('selector');

    for ( const ref of selectores) {
        ref.classList.remove('working');
    }

    link.classList.add('working');
  }
}