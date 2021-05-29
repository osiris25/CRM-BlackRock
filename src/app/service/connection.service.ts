import { Injectable } from '@angular/core';


// export interface User {
//   uid: string;
//   email: string;
//   displayName: string;
//   photoURL: string;
//   emailVerified: boolean;
// }

// @Injectable({
//   providedIn: 'root'
// })
export class ConnectionService {
  uid: string="";
  email: string = "";
  emailVerified: boolean=true;
  constructor() { }

}
