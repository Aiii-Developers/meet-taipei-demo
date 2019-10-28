import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNameComponent } from './user-name/user-name.component';
import { FinalPageComponent } from './final-page/final-page.component';


@NgModule({
  declarations: [
    UserNameComponent,
    FinalPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FinalPageComponent,
    UserNameComponent
  ]
})
export class ECommerceModule { }
