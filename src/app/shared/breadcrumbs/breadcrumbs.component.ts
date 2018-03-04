import { Component, OnInit } from '@angular/core';
import { Router,  ActivationEnd} from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta,  MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string;
  constructor( private router: Router, public title: Title, public meta: Meta) {

    this.label = '';

    this.getDataRoute().subscribe(data => {
      this.label = data.titulo;
      this.title.setTitle(this.label);

      const metaTag: MetaDefinition = {
      name: 'description',
      content: this.label
      };

      this.meta.updateTag(metaTag);
    });

   }

  ngOnInit() {
  }

  // Lo correcto es ponerlo en algun servicio
  getDataRoute() {
    return this.router.events.pipe(
            filter( evento => evento instanceof ActivationEnd),
            filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
            map( (event: ActivationEnd) => event.snapshot.data));
  }
}
