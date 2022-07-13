import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MikiComponent } from './miki.component';

describe('MikiComponent', () => {
  let component: MikiComponent;
  let fixture: ComponentFixture<MikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MikiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
