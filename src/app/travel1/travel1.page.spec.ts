import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Travel1Page } from './travel1.page';

describe('Travel1Page', () => {
  let component: Travel1Page;
  let fixture: ComponentFixture<Travel1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Travel1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Travel1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
