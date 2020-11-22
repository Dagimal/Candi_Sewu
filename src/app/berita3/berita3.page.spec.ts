import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Berita3Page } from './berita3.page';

describe('Berita3Page', () => {
  let component: Berita3Page;
  let fixture: ComponentFixture<Berita3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Berita3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Berita3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
