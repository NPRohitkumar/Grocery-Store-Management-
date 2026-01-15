import { Injectable } from '@angular/core';

export interface ShipmentStats {
  labels: string[];
  values: number[];
}

@Injectable({
  providedIn: 'root',
})
export class Shipment {

  private shipmentStats: ShipmentStats = {
    labels: ['Completed', 'In-Transit', 'Failed', 'Pending'],
    values: [528, 336, 19, 77]
  };

  getShipmentStats(): ShipmentStats {
    return this.shipmentStats;
  }

  getTotalShipments(): number {
    return this.shipmentStats.values.reduce((a, b) => a + b, 0);
  }
}
