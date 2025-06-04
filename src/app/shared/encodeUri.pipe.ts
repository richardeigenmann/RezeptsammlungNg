import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'encodeURI',
    standalone: true,
})

export class EncodeURI implements PipeTransform {
    transform(value: string) {
        return encodeURI(value);
    }
}
