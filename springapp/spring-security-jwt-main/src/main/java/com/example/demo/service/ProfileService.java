package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Profile;
import com.example.demo.repository.ProfileRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProfileService {
	@Autowired
    ProfileRepo profRepo;
public Optional<Profile> getStudent(int id){
	return profRepo.findById(id);
}
public String deleteDetails(int id) {
	profRepo.deleteById(id);
	return "Id deleted";
}
}
