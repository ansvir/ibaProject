import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import {HttpClientModule} from '@angular/common/http';
import { IoComponent } from './io/io.component';
import {ResolverModule} from './resolver.module';
import { routing } from './resolver.module';
import {RouterModule} from '@angular/router';


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
    routing
  ],
  exports: [RouterModule],
  providers: [ResolverModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
