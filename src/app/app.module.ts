import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import {HttpClientModule} from '@angular/common/http';
import { IoComponent } from './io/io.component';
import {ResolverModule} from './resolver.module';
import {RouterModule} from '@angular/router';
import {ResolverService} from './services/resolver.service';


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
    ResolverModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
