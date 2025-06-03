import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StatsComponent } from './stats.component';
import { StatsService, IRecipeStat } from '../services/stats.service';
import { Observable } from 'rxjs';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;
  let service: StatsService;
  let observable: Observable<IRecipeStat>; // Changed here

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsComponent ],
      providers: [ StatsService ]
    })
    .compileComponents();
    service = TestBed.inject(StatsService);
    observable = service.getStatsData();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return an array of stats', () => {
    const stats: IRecipeStat[] = []; // Changed here
    observable.subscribe((data: IRecipeStat) => { // Changed here
      stats.push(data);
      expect(data).toBeTruthy();
      expect(data.recipeName).toBeDefined();
      expect(data.url).toBeDefined();
      expect(data.views).toBeDefined();
      expect(data.percent).toBeDefined();
    });
    expect(stats.length).toBeGreaterThan(0);
  });

});

