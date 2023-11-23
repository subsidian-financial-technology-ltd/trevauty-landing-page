// import { Injectable } from '@angular/core';
// import { ITerminal } from '../models/ITerminal';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ManageTerminalService {


//   constructor() {}

//   getPeople(): Observable<ITerminal[]> {
//     return Observable.of([
//       {
//         id: 1,
//         name: 'Juri',
//         surname: 'Strumpflohner',
//         twitter: '@juristr'
//       }
//     ]);
//   }
// }



import { Injectable } from '@angular/core';
import { ITerminal } from '../models/ITerminal';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageTerminalService {

  constructor() {}

  getTerminal(): Observable<ITerminal[]> {
    return of([
      {
        id: 1,
        name: 'Juri',
        surname: 'Strumpflohner',
        twitter: '@juristr'
      }
    ]);
  }
}