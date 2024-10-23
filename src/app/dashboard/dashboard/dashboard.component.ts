import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/api/transactions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  // transactionsService: any;
  // transactions: any;

  ngOnInit(): void {
    // this.transactionsService.getTransactions$().subscribe((response: { data: ITransaction; }) => {
    //   this.transactions = response.data
    // });
  }
}
