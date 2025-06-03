import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'encodeURI',

})

export class EncodeURI implements PipeTransform {
    transform(value: string) {
        return encodeURI(value);
    }
}
