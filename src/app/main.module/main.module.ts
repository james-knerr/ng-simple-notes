import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module/shared.module';
import { MainPageComponent } from './main-page.component/main-page.component';

import { MainRoutingModule } from './main-routing.module';
@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [MainPageComponent]
})
export class MainModule { }
