import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Travel3Page } from './travel3.page';

describe('Travel3Page', () => {
  let component: Travel3Page;
  let fixture: ComponentFixture<Travel3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Travel3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Travel3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
