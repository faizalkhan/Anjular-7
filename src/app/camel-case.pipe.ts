import { Pipe, PipeTransform } from '@angular/core';
import { camelCase } from 'lodash';
@Pipe({ name: 'camelCase'})
export class CamelCasePipe implements PipeTransform {

  transform(value:any): any {
    return camelCase(value);
  }

}
