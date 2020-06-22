import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitTestsService {

  constructor() { }

  public doSomething() {
    return true;
  }
}
