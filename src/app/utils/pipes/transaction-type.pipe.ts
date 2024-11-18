import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 0: return 'DEBIT transaction';
      case 1: return 'ATM withdrawal';
      default: return '';
    }
  }
}
