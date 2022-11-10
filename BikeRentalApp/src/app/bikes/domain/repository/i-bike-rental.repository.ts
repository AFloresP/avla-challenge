import { Bike } from '../../data/models/bike.model';

export abstract class IBikeRentalRepository {
    abstract searchAvailability(search_location: string, start_date: string, end_date: string): Promise<Bike[]>;
}