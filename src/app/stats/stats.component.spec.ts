import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StatsComponent } from './stats.component';
import { StatsService } from '../services/stats.service';
import { Observable } from 'rxjs';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;
  let service: StatsService;
  let observable: Observable<any[]>;

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
    const stats = []
    observable.subscribe(data => {
      stats.push(data);
      expect(data).toBeTruthy();
    });
    expect(stats.length).toBeGreaterThan(0);
  });

});

