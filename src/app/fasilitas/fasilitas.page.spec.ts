import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FasilitasPage } from './fasilitas.page';

describe('FasilitasPage', () => {
  let component: FasilitasPage;
  let fixture: ComponentFixture<FasilitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasilitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FasilitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
