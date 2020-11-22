import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Travel2Page } from './travel2.page';

describe('Travel2Page', () => {
  let component: Travel2Page;
  let fixture: ComponentFixture<Travel2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Travel2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Travel2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
