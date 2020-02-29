import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurpermissonComponent } from './securpermisson.component';

describe('SecurpermissonComponent', () => {
  let component: SecurpermissonComponent;
  let fixture: ComponentFixture<SecurpermissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurpermissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurpermissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
