import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicAccountsListComponent } from './basic-accounts-list/basic-accounts-list.component';
import { BasicAccountsDetailComponent } from './basic-accounts-detail/basic-accounts-detail.component';

const routes: Routes = [
  { path: '', component: BasicAccountsListComponent },
  { path: 'detail/:id', component: BasicAccountsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAccountsRoutingModule { }
