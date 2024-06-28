// src/app/home/home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  customerId: string = '';
  accountNumber: string = '';
  filteredData: any[] = [];

  fetchedData = [
    { customerId: '11111', account: '12345', nbkReference: 'NBK001', lcType: 'Type1', beneficiary: 'John Doe', issuanceDate: '2023-01-01', expiryDate: '2024-01-01', tenor: '365', shipmentDate: '2023-12-01', currency: 'USD', originalAmount: '$1000', outstandingAmount: '$800', outstandingBillAmount: '$200', lcProvision: 'Provision1', billProvision: 'Provision2', advisingBank: 'Bank1' },
    { customerId: '22222', account: '67890', nbkReference: 'NBK002', lcType: 'Type2', beneficiary: 'Jane Smith', issuanceDate: '2023-02-01', expiryDate: '2024-02-01', tenor: '365', shipmentDate: '2023-11-01', currency: 'EUR', originalAmount: '€2000', outstandingAmount: '€1500', outstandingBillAmount: '€500', lcProvision: 'Provision3', billProvision: 'Provision4', advisingBank: 'Bank2' },
    // Add more sample data as needed
  ];

  handleView() {
    const result = this.fetchedData.filter(
      (item) =>
        item.customerId === this.customerId && item.account === this.accountNumber
        
    );
    this.filteredData = result;
  }

  handleBack() {
    alert('Back button clicked');
    // Implement back button logic if needed
  }

  handleExport() {
    alert('Export button clicked');
    // Implement export button logic if needed
  }
}
