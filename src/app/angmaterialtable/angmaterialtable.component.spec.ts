import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngmaterialtableComponent } from './angmaterialtable.component';

describe('AngmaterialtableComponent', () => {
  let component: AngmaterialtableComponent;
  let fixture: ComponentFixture<AngmaterialtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngmaterialtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngmaterialtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
