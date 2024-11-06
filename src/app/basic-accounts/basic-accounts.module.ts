import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAccountsRoutingModule } from './basic-accounts-routing.module';
import { BasicAccountsListComponent } from './basic-accounts-list/basic-accounts-list.component';
import { BasicAccountsDetailComponent } from './basic-accounts-detail/basic-accounts-detail.component';
import { WithdrawalDetailComponent } from './basic-accounts-detail/withdrawal-detail/withdrawal-detail.component';
import { BasicDetailComponent } from './basic-accounts-detail/basic-detail/basic-detail.component';
import { UtilsModule } from '../utils/utils/utils.module';

import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


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
    UtilsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class BasicAccountsModule { }
