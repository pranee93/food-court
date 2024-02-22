import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  recepies: any[] = [];
  st: string = '';
  c = 0;
  constructor(private ds: DataService) {
    this.ds
      .getAllRecepies()
      .subscribe((data: any) => (this.recepies = data.recipes));
  }
  search() {
    this.ds
      .getsearchrecepies(this.st)
      .subscribe((data: any) => (this.recepies = data.recipes));
  }

  fun1() {
    this.c++;
  }
  fun2() {
    this.c = 0;
  }
}
