import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaleriPage } from './galeri.page';

describe('GaleriPage', () => {
  let component: GaleriPage;
  let fixture: ComponentFixture<GaleriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
