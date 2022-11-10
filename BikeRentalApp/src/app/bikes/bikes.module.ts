import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BikeRentalRepository } from './data/repository/bike-rental.repository';
import { IBikeRentalRepository } from './domain/repository/i-bike-rental.repository';
import { HomeComponent } from './presentation/home/home.component';
import { ResultComponent } from './presentation/result/result.component';
import { DxButtonModule, DxDateBoxModule, DxPopupModule, DxTextBoxModule, DxFormModule, DxCheckBoxModule, DxDataGridModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
        DxButtonModule,
        DxPopupModule,
        DxTextBoxModule,
        DxFormModule,
        DxCheckBoxModule,
        DxDateBoxModule,
        DxDataGridModule
    ],
    declarations: [
        ResultComponent,
        HomeComponent
    ],
    exports: [
    ],
    providers: [{
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: IBikeRentalRepository,
      useClass: BikeRentalRepository
    }
    ]
  })
export class BikesModule { }