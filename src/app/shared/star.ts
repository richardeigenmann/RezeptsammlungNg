import { ChangeDetectionStrategy, Component, Output, EventEmitter, input, computed } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.html',
    styleUrl: './star.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class StarComponent {

    rating = input.required<number>();
    starWidth = computed(() => this.rating() * 86 / 5);

    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    onClick() {
        console.log(`The rating ${this.rating()} was clicked!`);
        this.ratingClicked.emit(`The rating ${this.rating()} was clicked!`);
    }
}
