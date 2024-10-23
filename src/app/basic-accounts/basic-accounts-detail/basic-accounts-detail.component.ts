import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITransaction, TransactionsService } from 'src/app/api/transactions.service';

@Component({
  selector: 'app-basic-accounts-detail',
  templateUrl: './basic-accounts-detail.component.html',
  styleUrls: ['./basic-accounts-detail.component.css']
})
export class BasicAccountsDetailComponent implements OnInit{
  // transactionData: ITransaction
  transactionData: ITransaction;

  constructor(private transactionService: TransactionsService, private router: Router){}

  async ngOnInit() {
    var id = this.router.url.slice(this.router.url.lastIndexOf('/') + 1)
    this.transactionService.getTransactionDetail$(id).subscribe((response) => {
      this.transactionData = response.data;
    });
  }
}
