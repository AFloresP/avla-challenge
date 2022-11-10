package com.avla.BikeRental.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bikes")
public class BikeModel {

    @Id
    private long id;

    @Column
    private String location;

    @Column
    private String model;

    @Column
    private String color;

    @Column
    private String photo;

    @Column
    private double latitude;

    @Column
    private double longitude;

    @Column
    private boolean available;

    @Temporal(TemporalType.TIMESTAMP)
    private Date available_date;

    @Transient
    private Double distance;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public Date getAvailable_date() {
        return available_date;
    }

    public void setAvailable_date(Date available_date) {
        this.available_date = available_date;
    }

    public Double getDistance() { return distance; }

    public void setDistance(Double distance) { this.distance = distance; }
}
