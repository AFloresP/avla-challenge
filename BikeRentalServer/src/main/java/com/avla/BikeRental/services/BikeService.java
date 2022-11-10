package com.avla.BikeRental.services;

import com.avla.BikeRental.models.BikeModel;
import com.avla.BikeRental.repositories.BikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class BikeService {

    @Autowired
    private BikeRepository bikeRepository;

    public List<BikeModel> searchAvailability(String search_location, Date start_date, Date end_date) {

        List<BikeModel> lstBikes;

        /* Expresion regular para validar una coordenada "latitud,longitud" */
        Pattern pat = Pattern.compile("^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$");
        Matcher mat = pat.matcher(search_location);

        if(mat.matches()) {
            String[] arrOfStr = search_location.split(",");
            lstBikes = bikeRepository.getAvailability(null, start_date, end_date);
            Double location_latitude = new Double(arrOfStr[0]), location_longitude = new Double(arrOfStr[1]);

            /*calcula la distancia entre 2 puntos por cada objeto*/
            lstBikes.stream().forEach(b -> b.setDistance(Math.abs(Math.sqrt (Math.pow ((b.getLongitude()-location_longitude),2) + Math.pow ((b.getLatitude()-location_latitude),2)))));
            /*ordena segun la distancia de menos a mas*/
            lstBikes.sort(Comparator.comparingDouble(b -> b.getDistance() ));
        } else {
            lstBikes = bikeRepository.getAvailability(search_location, start_date, end_date);
        }

        return lstBikes;
    }
}
