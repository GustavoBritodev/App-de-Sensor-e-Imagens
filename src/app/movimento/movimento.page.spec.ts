import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovimentoPage } from './movimento.page';

describe('MovimentoPage', () => {
  let component: MovimentoPage;
  let fixture: ComponentFixture<MovimentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
