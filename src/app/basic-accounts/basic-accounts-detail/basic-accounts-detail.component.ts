import { Component, OnInit } from '@angular/core';
import { ITransaction, TransactionsService } from 'src/app/api/transactions.service';

@Component({
  selector: 'app-basic-accounts-detail',
  templateUrl: './basic-accounts-detail.component.html',
  styleUrls: ['./basic-accounts-detail.component.css']
})
export class BasicAccountsDetailComponent implements OnInit{
  transactionData: ITransaction;

  constructor(transactionService: TransactionsService){}

  ngOnInit(id: number): void {
    this.transactionService.getTransactionDetail$(id).subscribe((response) => {
      
    });
  }

}
