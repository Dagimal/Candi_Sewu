import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BangunanPage } from './bangunan.page';

describe('BangunanPage', () => {
  let component: BangunanPage;
  let fixture: ComponentFixture<BangunanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangunanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BangunanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
