import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegendaPage } from './legenda.page';

describe('LegendaPage', () => {
  let component: LegendaPage;
  let fixture: ComponentFixture<LegendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
