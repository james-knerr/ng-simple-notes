import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component/main-page.component';
const mainRoutes: Routes = [
    {
        path: '',
        component: MainPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule],
    providers: []
})

export class MainRoutingModule { }
