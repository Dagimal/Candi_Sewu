import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SejarahPage } from './sejarah.page';

describe('SejarahPage', () => {
  let component: SejarahPage;
  let fixture: ComponentFixture<SejarahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SejarahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SejarahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
