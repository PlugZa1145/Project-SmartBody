import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AerobicAnaerobicPage } from './aerobic-anaerobic.page';

describe('AerobicAnaerobicPage', () => {
  let component: AerobicAnaerobicPage;
  let fixture: ComponentFixture<AerobicAnaerobicPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AerobicAnaerobicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AerobicAnaerobicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
