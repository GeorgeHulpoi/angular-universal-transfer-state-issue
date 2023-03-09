import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  declarations: [PageComponent],
  exports: [PageComponent],
})
export class PageModule {}
