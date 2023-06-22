import { Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appFirstcharacterinputtxt]' 
})
export class FirstcharacterinputtxtDirective {

possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  constructor( private el:ElementRef) { }

  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keyup') keyup(){
    if(this.el.nativeElement.value){
      const arr:string[] = this.el.nativeElement.value.split('');
      console.log(arr);
      arr[0] = arr[0].toUpperCase();
      this.el.nativeElement.value = arr.join('');
    }
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.possibleColors[colorPick];
    this.borderColor = this.possibleColors[colorPick];
  }
}
