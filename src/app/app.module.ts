import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { LazyModule } from './lazy/lazy.module';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }],
  bootstrap: [AppComponent]
})
export class AppModule { }
