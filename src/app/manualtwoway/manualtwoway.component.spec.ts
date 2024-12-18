import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualtwowayComponent } from './manualtwoway.component';

describe('ManualtwowayComponent', () => {
  let component: ManualtwowayComponent;
  let fixture: ComponentFixture<ManualtwowayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualtwowayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualtwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
