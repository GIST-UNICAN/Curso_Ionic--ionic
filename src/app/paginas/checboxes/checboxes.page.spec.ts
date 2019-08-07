import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecboxesPage } from './checboxes.page';

describe('ChecboxesPage', () => {
  let component: ChecboxesPage;
  let fixture: ComponentFixture<ChecboxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecboxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecboxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
