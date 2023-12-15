import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BuildComponent } from './build.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeSiteService } from '../../services/recipe-site.service';

describe('BuildComponent', () => {
  let component: BuildComponent;
  let fixture: ComponentFixture<BuildComponent>;
  let service: RecipeSiteService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientModule ], 
      providers: [ RecipeSiteService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(RecipeSiteService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Angular version greater than 17.0.0', () => {
    const parts = component.angularVersion.split('.');
    const major = parseInt(parts[0], 10);
    const minor = parseInt(parts[1], 10);
    const patch = parseInt(parts[2], 10);
    
    expect(major).toBeGreaterThanOrEqual(17);
  });

  it('expect the correct github.io url', () => {
    let url = ''
    url = service.getRecipesUrl();

    expect(url).toBe('https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json');
  });
});
