import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gigabytesToMegabytes',
  pure: true
})
export class GigabytesToMegabytesPipe implements PipeTransform {

  transform(value: number): number {
    const megabyte = 1024;
    if(!isNaN(value)){
      return value * megabyte;
    }
    return 0;
  }

}
