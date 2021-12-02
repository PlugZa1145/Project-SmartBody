import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndAerobicAnaerobicPage } from './end-aerobic-anaerobic.page';

describe('EndAerobicAnaerobicPage', () => {
  let component: EndAerobicAnaerobicPage;
  let fixture: ComponentFixture<EndAerobicAnaerobicPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EndAerobicAnaerobicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndAerobicAnaerobicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
