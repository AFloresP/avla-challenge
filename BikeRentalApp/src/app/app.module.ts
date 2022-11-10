import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDateBoxModule, DxPopupModule, DxTextBoxModule, DxFormModule, DxCheckBoxModule, DxDataGridModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikesModule } from './bikes/bikes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BikesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
