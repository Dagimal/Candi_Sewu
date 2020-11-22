import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BangunanNavigatorPage } from './bangunan-navigator.page';

describe('BangunanNavigatorPage', () => {
  let component: BangunanNavigatorPage;
  let fixture: ComponentFixture<BangunanNavigatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangunanNavigatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BangunanNavigatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
