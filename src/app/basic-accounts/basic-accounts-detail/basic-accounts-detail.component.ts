import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  detailForm = new FormGroup({
    accountNumber: new FormControl('accountNumber'),
    amount: new FormControl('amount'),
    issueDate: new FormControl('issueDate')
  });

  async ngOnInit() {
    var id = this.router.url.slice(this.router.url.lastIndexOf('/') + 1)
    this.transactionService.getTransactionDetail$(id).subscribe((response) => {
      this.transactionData = response.data;
      this.detailForm.patchValue({
        accountNumber: response.data.accountNumber,
        amount: response.data.amount.toString(),
        issueDate: response.data.issueDate
      });
    });
  }

}
