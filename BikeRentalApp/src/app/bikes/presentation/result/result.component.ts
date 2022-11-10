import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../../data/models/bike.model';
import { SearchAvailabilityUsecase } from '../../domain/usecases/bike-rental_search_availability.usecase';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  bikes: Bike[] = [];

  constructor(
      private searchAvailabilityUsecase: SearchAvailabilityUsecase,
      private router: Router 
    ) { }

  ngOnInit(): void {
    this.bikes = this.searchAvailabilityUsecase.lstBikes;
  }

  fnGoToHome() {
    this.searchAvailabilityUsecase.lstBikes = [];
    this.router.navigate(["/"]);
  }

}
