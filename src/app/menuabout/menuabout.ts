import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
    selector: 'pm-menuabout',
    styleUrls: [],
    imports: [RouterLinkActive, RouterLink],
    standalone: true,
    template: `
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class='dropdown-item' [routerLink]="'/about'" routerLinkActive='active'>About</a>
    <a class='dropdown-item' [routerLink]="'/privacy'" routerLinkActive='active'>Privacy</a>
    <a class='dropdown-item' [routerLink]="'/build'" routerLinkActive='active'>Build Info</a>
    <a class='dropdown-item' href="https://richardeigenmann.github.io/Rezeptsammlung/app.htm" target="_blank">Filter Experiment</a>
</div>
`
})

export class Menuabout {
}
