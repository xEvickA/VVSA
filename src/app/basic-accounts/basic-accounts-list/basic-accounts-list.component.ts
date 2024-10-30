import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/api/transactions.service';
import { TransactionsService } from 'src/app/api/transactions.service';
import {animate, state, style, transition, trigger} from '@angular/animations';  // TODO predpriprava na table with expandable rows

@Component({
  selector: 'app-basic-accounts-list',
  templateUrl: './basic-accounts-list.component.html',
  styleUrls: ['./basic-accounts-list.component.css'],
  animations: [  // TODO predpriprava na table with expandable rows
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BasicAccountsListComponent implements OnInit{
  displayedColumns: string[] = ['partnerName', 'type', 'date', 'amount'];
  transactions: ITransaction[] = [];

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService.getTransactions$().subscribe((response) => {
      this.transactions = response.data;
    });
  }
}
