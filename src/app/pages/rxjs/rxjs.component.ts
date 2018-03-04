import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { retry, map, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    // los observable tienen tres callback (exito, error, completado)
   this.subscription = this.regresaObservable().subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador termino!')
    );
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable (): Observable<any> {
    return new Observable( observer => {
    let contador = 0;
        const intervalo = setInterval( () => {
          contador += 1;

          const salida = {
            valor: contador
          };
          observer.next(salida);
          // if ( contador === 3) {
          //   clearInterval(intervalo);
          //   observer.complete();
          // }
          //  if ( contador === 2) {
          //     // clearInterval(intervalo);
          //     observer.error('Auxilio!');
          //  }
        }, 500 );
    }).pipe( retry(2),
          map ((resp: any) => {
      return resp.valor;
    }),
  filter( (valor, index) => {
      if ( valor % 2 === 1) {
        // impar
        return true;
      } else {
        // par
        return false;
      }

  }) );


  }

}
