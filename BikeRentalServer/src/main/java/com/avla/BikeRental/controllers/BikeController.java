package com.avla.BikeRental.controllers;

import com.avla.BikeRental.models.BikeModel;
import com.avla.BikeRental.services.BikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping()
public class BikeController {

    @Autowired
    private BikeService bikeService;

    @GetMapping(path = "/availability", produces = "application/json")
    public ResponseEntity<List<BikeModel>> searchAvailability(
            @RequestParam(value = "search_location", required = true) String search_location,
            @RequestParam(value = "start_date", required = false) @DateTimeFormat(pattern="yyyy-MM-dd") Date start_date,
            @RequestParam(value = "end_date", required = false) @DateTimeFormat(pattern="yyyy-MM-dd") Date end_date
    ) {
        List<BikeModel> lstBikes = bikeService.searchAvailability(search_location,start_date,end_date);
        return ResponseEntity.ok(lstBikes);
    }


}
