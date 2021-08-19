import { Injectable } from '@angular/core'
@Injectable({
  providedIn: 'root'
})

export class StoreService {
  options: string[] = [];
  title: string = ""

  setOptions(threeOptions: number) {
    if (threeOptions) {
      this.options = ['Sim', 'Não', 'Talvez'];
    } else {
      this.options = ['Sim', 'Não'];
    }
  }
}