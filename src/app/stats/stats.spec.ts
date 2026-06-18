import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatsComponent } from './stats';
import { StatsService } from '../services/stats';
import { IStat } from '../shared/stat';
import { provideZonelessChangeDetection, signal } from '@angular/core';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;
  const mockStats: IStat[] = [
    { recipeName: 'Recipe A', url: 'url/a', views: 10 },
    { recipeName: 'Recipe B', url: 'url/b', views: 20 },
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('StatsService', ['getStatsData', 'getStatsDate']);
    spy.getStatsDate.and.returnValue(signal('01.01.2025'));
    spy.getStatsData.and.returnValue(signal(mockStats));

    await TestBed.configureTestingModule({
      imports: [ StatsComponent ],
      providers: [
        provideZonelessChangeDetection(),
        { provide: StatsService, useValue: spy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display stats', () => {
    expect(component.stats().length).toBe(2);
    expect(component.stats()).toEqual(mockStats);
  });

  it('should calculate total views correctly', () => {
    expect(component.totalViews()).toBe(30);
  });

});
