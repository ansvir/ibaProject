import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import {HttpClientModule} from '@angular/common/http';
import { IoComponent } from './io/io.component';
import {AppConfig} from './config/app.config';

export function loadConfig(config: AppConfig) {
  return () => config.load();
}

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
  ],
  bootstrap: [AppComponent],
  providers: [
    AppConfig,
    {provide: APP_INITIALIZER, useFactory: loadConfig, deps: [AppConfig], multi: true}
  ]
})
export class AppModule {

}
