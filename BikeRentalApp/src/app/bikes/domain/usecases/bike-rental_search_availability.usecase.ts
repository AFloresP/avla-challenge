import { Injectable } from '@angular/core';
import { IBikeRentalRepository } from '../repository/i-bike-rental.repository';
import { Bike } from '../../data/models/bike.model';

@Injectable({
    providedIn: 'root'
})
export class SearchAvailabilityUsecase {

    lstBikes: Bike[] = [];

    constructor(private iBikeRentalRepository: IBikeRentalRepository) { }

    execute(search_location: string, start_date: string, end_date: string): Promise<Bike[]> {
        return this.iBikeRentalRepository.searchAvailability(search_location, start_date, end_date);
    }

}