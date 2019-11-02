import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import {HttpClientModule} from '@angular/common/http';
import { IoComponent } from './io/io.component';
import {RouterModule, Routes} from '@angular/router';
import {GetServiceResolver} from './services/getservice.resolver.service';

const routes: Routes = [
  { path: '', component: AppComponent, resolve: {
      getService: GetServiceResolver
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    IoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [GetServiceResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
