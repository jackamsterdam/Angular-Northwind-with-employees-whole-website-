import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {


  generate(min: number, max: number): Observable<number> {
    return new Observable((observer: Observer<number>) => {
      let count = 15
      const timerId = setInterval(() => {
        try {
          
          min = Math.ceil(min);
          max = Math.floor(max);
          let num =  Math.floor(Math.random() * (max - min + 1) + min);
          observer.next(num)
// debugger
          count--
          if (count === 0){
            clearInterval(timerId)
            observer.complete()
          }

        }
         catch (err:any) {
          clearInterval(timerId)
          observer.error(err)
        } 
        
      }, 500)
    })
  }
}
