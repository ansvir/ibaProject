import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ResolverService} from './services/resolver.service';
import {TabsComponent} from './tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    resolve: {
      subsystems: ResolverService
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ResolverService]
})
export class ResolverModule { }
