import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIconsComponent } from './page-icons.component';

describe('PageIconsComponent', () => {
  let component: PageIconsComponent;
  let fixture: ComponentFixture<PageIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
