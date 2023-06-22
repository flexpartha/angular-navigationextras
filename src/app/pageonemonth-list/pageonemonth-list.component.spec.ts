import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageonemonthListComponent } from './pageonemonth-list.component';

describe('PageonemonthListComponent', () => {
  let component: PageonemonthListComponent;
  let fixture: ComponentFixture<PageonemonthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageonemonthListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageonemonthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
