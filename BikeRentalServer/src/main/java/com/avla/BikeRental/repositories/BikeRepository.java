package com.avla.BikeRental.repositories;

import com.avla.BikeRental.models.BikeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BikeRepository extends JpaRepository<BikeModel, Long> {

    @Query("SELECT " +
            "b " +
            "FROM BikeModel b " +
            "WHERE (:search_location IS NULL OR LOWER(b.location) LIKE LOWER(concat('%', :search_location,'%'))) " +
                "AND (cast(:start_date as date) IS NULL OR b.available_date >= :start_date) " +
                "AND (cast(:end_date as date) IS NULL OR b.available_date <= :end_date)" +
                "AND b.available = TRUE")
    List<BikeModel> getAvailability(@Param("search_location") String search_location, @Param("start_date") Date start_date, @Param("end_date") Date end_date);
}
