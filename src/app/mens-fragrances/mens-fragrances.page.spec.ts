import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensFragrancesPage } from './mens-fragrances.page';

describe('MensFragrancesPage', () => {
  let component: MensFragrancesPage;
  let fixture: ComponentFixture<MensFragrancesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensFragrancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
