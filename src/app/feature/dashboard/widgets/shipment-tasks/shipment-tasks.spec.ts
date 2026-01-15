import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTasks } from './shipment-tasks';

describe('ShipmentTasks', () => {
  let component: ShipmentTasks;
  let fixture: ComponentFixture<ShipmentTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentTasks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
