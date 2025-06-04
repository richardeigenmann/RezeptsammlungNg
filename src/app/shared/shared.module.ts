import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StarComponent // Added here as it's now standalone
  ],
  declarations: [
    // StarComponent removed as it's now standalone
  ],
  exports: [
    StarComponent, // Remains in exports
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
