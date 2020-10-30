import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {
  @Output() errorOutput: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public updateErrorBackground() {
    this.errorOutput.emit(true);
  }
}
