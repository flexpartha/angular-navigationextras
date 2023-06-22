import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageonedetailComponent } from './pageonedetail.component';

describe('PageonedetailComponent', () => {
  let component: PageonedetailComponent;
  let fixture: ComponentFixture<PageonedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageonedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageonedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
