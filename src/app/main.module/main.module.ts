import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module/shared.module';
import { MainPageComponent } from './main-page.component/main-page.component';
import { MainService } from './main.service';
import { MainRoutingModule } from './main-routing.module';
import { DeleteFilterPipe } from './main-page.component/deleted-notes.pipe';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [MainPageComponent, DeleteFilterPipe],
  providers: [MainService]
})
export class MainModule { }
