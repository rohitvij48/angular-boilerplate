import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback.component';


@NgModule({
  declarations: [AuthCallbackComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AuthCallbackComponent }])
  ]
})
export class AuthCallbackModule { }
