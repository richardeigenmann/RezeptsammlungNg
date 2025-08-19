import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StatsComponent } from './stats';
import { StatsService } from '../services/stats';
import { of } from 'rxjs';
import { IStat } from '../shared/stat';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;
  let statsServiceSpy: jasmine.SpyObj<StatsService>;

  const mockStats: IStat[] = [
    { recipeName: 'Recipe A', url: 'url/a', views: 10 },
    { recipeName: 'Recipe B', url: 'url/b', views: 20 },
  ];

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('StatsService', ['getStatsData', 'getStatsDate']);

    TestBed.configureTestingModule({
      imports: [ StatsComponent ],
      providers: [
        { provide: StatsService, useValue: spy }
      ]
    })
    .compileComponents();

    statsServiceSpy = TestBed.inject(StatsService) as jasmine.SpyObj<StatsService>;
  }));

  beforeEach(() => {
    statsServiceSpy.getStatsDate.and.returnValue('01.01.2025');
    statsServiceSpy.getStatsData.and.returnValue(of(mockStats));

    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // triggers ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display stats after ngOnInit', () => {
    expect(component.stats.length).toBe(2);
    expect(component.stats).toEqual(mockStats);
  });

  it('should calculate total views correctly', () => {
    expect(component.totalViews).toBe(30);
  });

});
