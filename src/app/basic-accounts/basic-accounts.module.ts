import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';
import { BasicAccountsListComponent } from './basic-accounts-list/basic-accounts-list.component';
import { BasicAccountsDetailComponent } from './basic-accounts-detail/basic-accounts-detail.component';
import { WithdrawalDetailComponent } from './basic-accounts-detail/withdrawal-detail/withdrawal-detail.component';
import { BasicDetailComponent } from './basic-accounts-detail/basic-detail/basic-detail.component';
import { UtilsModule } from '../utils/utils/utils.module';


@NgModule({
  declarations: [
    BasicAccountsListComponent,
    BasicAccountsDetailComponent,
    BasicDetailComponent,
    WithdrawalDetailComponent
  ],
  imports: [
    CommonModule,
    BasicAccountsRoutingModule,
    UtilsModule
  ]
})
export class BasicAccountsModule { }
