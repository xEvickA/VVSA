import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/api/transactions.service';
import { TransactionsService } from 'src/app/api/transactions.service';

@Component({
  selector: 'app-basic-accounts-list',
  templateUrl: './basic-accounts-list.component.html',
  styleUrls: ['./basic-accounts-list.component.css'],
})
export class BasicAccountsListComponent implements OnInit{
  displayedColumns: string[] = ['partnerName', 'type', 'accountNumber', 'amount', 'action'];
  transactions: ITransaction[] = [];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService.getTransactions$().subscribe((response) => {
      this.transactions = response.data;
    });
  }

}