import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gest'
})
export class GestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
