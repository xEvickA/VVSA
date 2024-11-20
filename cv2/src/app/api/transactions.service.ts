import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  getTransactions$() {
    return this.httpClient.get<{data: ITransaction[]}>(`/api/transactions`);
  }

  getTransactionDetail$(id: string) {
    return this.httpClient.get<{data: ITransaction}>(`/api/transactions/${id}`);
  }
}

export interface ITransaction {
  transactionId: number;
  fullName: string;
  transactionType: number;
  accountNumber: string;
  bankCode: string;
  issueDate: string;
  amount: number;
}
