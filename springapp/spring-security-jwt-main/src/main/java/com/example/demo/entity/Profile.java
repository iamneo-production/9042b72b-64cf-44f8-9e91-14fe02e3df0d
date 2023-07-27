package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Profile {
	 @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id;
     private String name;
     private int age;
     private String gender;
     private String about;
     private String preference;
     private String religion;
     private String caste;
     private String status;
     private String mobile;
     private String mothertongue;
     private String country;
     private String city;
     private String email;
     private String height;
     private String weight;
}
