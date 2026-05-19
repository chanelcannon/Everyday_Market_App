import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenuItem } from './category-menu-item';

describe('CategoryMenuItem', () => {
  let component: CategoryMenuItem;
  let fixture: ComponentFixture<CategoryMenuItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryMenuItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryMenuItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
