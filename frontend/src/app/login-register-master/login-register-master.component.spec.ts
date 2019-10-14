import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterMasterComponent } from './login-register-master.component';

describe('LoginRegisterMasterComponent', () => {
  let component: LoginRegisterMasterComponent;
  let fixture: ComponentFixture<LoginRegisterMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegisterMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
