import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ResolverService} from './services/resolver.service';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: ResolverService
  }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [RouterModule],
  providers: [ResolverService]
})
export class ResolverModule { }
