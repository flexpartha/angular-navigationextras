import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CountryDetail {
  country: String;
  capital: String;
  weatherTmp: String;
}

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css'],
})
export class ChildcomponentComponent implements OnInit {
  title: string = 'custom component';
  name: string = 'PARTHA CHAKRABORTY';
  @Input() originalInput: string | undefined; // this is to pass the test for eslint only
  @Input() countrydetaiLlist: CountryDetail[] = [];
  @Output() despatchOnkeyUp: EventEmitter<any> = new EventEmitter();
  @Output() Click = new EventEmitter(); // this is to pass the test for eslint only
  constructor() {}

  ngOnInit(): void {
    console.log('');
  }

  onKeyUpF(evt: any) {
    for (let i = 0; i < this.countrydetaiLlist.length; i++) {
      if (evt.target.value === this.countrydetaiLlist[i].country) {
        this.despatchOnkeyUp.emit(this.countrydetaiLlist[i].capital);
        break;
      } else {
        this.despatchOnkeyUp.emit('NO MACHING');
      }
    }
  }
}
