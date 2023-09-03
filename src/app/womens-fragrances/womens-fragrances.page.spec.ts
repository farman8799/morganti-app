import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WomensFragrancesPage } from './womens-fragrances.page';

describe('WomensFragrancesPage', () => {
  let component: WomensFragrancesPage;
  let fixture: ComponentFixture<WomensFragrancesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WomensFragrancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
