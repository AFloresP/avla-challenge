import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Bike } from '../../data/models/bike.model';
import { LocationService } from 'src/app/core/services/location.service';
import { SearchAvailabilityUsecase } from '../../domain/usecases/bike-rental_search_availability.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bVisiblePopUp: boolean = false;
  closeButtonOptions: any;
  searchButtonOptions: any;

  cLocation: string = "";
  dStartDate: Date = new Date();
  dEndDate: Date = new Date();
  bUseLocation: boolean = false;
  aLocation: [number,number];

  constructor(
    private searchAvailabilityUsecase: SearchAvailabilityUsecase,
    private locationService: LocationService,
    private router: Router
  ) {
    this.dEndDate.setDate(this.dStartDate.getDate() + 7)

    this.searchButtonOptions = {
      text: 'Buscar',
      onClick : (e: any) => {
          this.searchAvailabilityUsecase.execute(
              (this.bUseLocation && this.aLocation && this.aLocation.length > 0) ? `${this.aLocation[1]},${this.aLocation[0]}` : this.cLocation,
              moment(this.dStartDate).format("YYYY-MM-DD"), 
              moment(this.dEndDate).format("YYYY-MM-DD")
            )
            .then((resp: Bike[]) => {
              this.bVisiblePopUp = false;
              this.cLocation = "";
              this.dStartDate = new Date();
              this.dEndDate = new Date();
              this.dEndDate.setDate(this.dStartDate.getDate() + 7)
              
              this.bUseLocation = false;

              this.searchAvailabilityUsecase.lstBikes = resp;
              this.router.navigate(["/result"]);
            });
      },
    };
  }

  ngOnInit(): void {
  }

  fnFindBikes() {
    this.bVisiblePopUp = true;
  }

  onCheckBoxChanged(e: any) {
    if(e.value) {
      this.locationService.getUserLocation()
        .then((resp) => {
          this.aLocation = resp;
        });
    }
  }

}
