import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
    standalone: false
})

export class StarComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        console.log(`The rating ${this.rating} was clicked!`);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
