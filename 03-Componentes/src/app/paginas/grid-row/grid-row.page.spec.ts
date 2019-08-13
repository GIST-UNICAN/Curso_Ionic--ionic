import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRowPage } from './grid-row.page';

describe('GridRowPage', () => {
  let component: GridRowPage;
  let fixture: ComponentFixture<GridRowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
