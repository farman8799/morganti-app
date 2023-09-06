import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandleVanillaSignatureComponent } from './candle-vanilla-signature.component';

describe('CandleVanillaSignatureComponent', () => {
  let component: CandleVanillaSignatureComponent;
  let fixture: ComponentFixture<CandleVanillaSignatureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CandleVanillaSignatureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandleVanillaSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
