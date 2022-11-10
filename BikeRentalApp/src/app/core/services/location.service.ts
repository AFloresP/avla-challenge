import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class LocationService {

    public userLocation?: [number, number];

    constructor() { }

    get isUserLocationReady(): boolean {
        return !!this.userLocation;
    }

    public async getUserLocation(): Promise<[number, number]> {

        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve([coords.longitude, coords.latitude])
                },
                (err) => {
                    alert('No se pudo obtener la geolocalizacion')
                    reject(err);
                }
            );
        });

    }
}