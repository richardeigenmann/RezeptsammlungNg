import { TestBed, waitForAsync } from '@angular/core/testing';

import { BuildComponent } from './build.component';

describe('BuildComponent', () => {
  let component: BuildComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Angular version greater than 17.0.0', () => {
    expect(component.angularVersion).toBe('17.0.1');
  });
});
