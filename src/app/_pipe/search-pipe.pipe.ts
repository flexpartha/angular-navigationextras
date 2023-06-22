import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, name: string) {
    if(name === ''){
      return value;
    }
    return value.filter((employee:any) => {
    console.log(employee);
    let n = employee.firstName.startsWith(name);
    if(n == true){
      return n;
    }
    console.log(n);
   });
  }

}
