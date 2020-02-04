import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFileComponent } from './json-file.component';

describe('JsonFileComponent', () => {
  let component: JsonFileComponent;
  let fixture: ComponentFixture<JsonFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
