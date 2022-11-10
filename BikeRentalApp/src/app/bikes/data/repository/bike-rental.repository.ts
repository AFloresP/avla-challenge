import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Bike } from "../models/bike.model";
import { IBikeRentalRepository } from "../../domain/repository/i-bike-rental.repository";

@Injectable({
  providedIn: "root"
})
export class BikeRentalRepository extends IBikeRentalRepository {

  constructor(private http: HttpClient) {
    super();
   }

  searchAvailability(search_location: string, start_date: string, end_date: string): Promise<Bike[]> {

    let params = new HttpParams()
      .set('search_location', search_location);

    if (start_date) params = params.append('start_date', start_date);
    if (end_date) params = params.append('end_date', end_date);

    const promise = new Promise<Bike[]>((resolve, reject) => {
      this.http.get<Bike[]>(`${environment.bikeRentalServicePath}/availability`, { params }).subscribe({
        next: (res: Bike[]) => {
          resolve(res);
        },
        error: (err: any) => {
          reject(err);
        }
      });
    });
    return promise;
  }
}