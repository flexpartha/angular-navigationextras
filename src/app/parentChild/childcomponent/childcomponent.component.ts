import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CountryDetail{
  country: String;
  capital: String;
  weatherTmp: String;
}

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  @Input() countrydetaiLlist:CountryDetail[] = [];
  @Output() despatchOnkeyUp:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUpF(evt:any){
      for(let i = 0; i < this.countrydetaiLlist.length; i++){
        if(evt.target.value === this.countrydetaiLlist[i].country){
          this.despatchOnkeyUp.emit(this.countrydetaiLlist[i].capital);
          break;
        }
        else{
          this.despatchOnkeyUp.emit("NO MACHING"); 
        }
      } 
  }
}
