package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Profile;
import com.example.demo.repository.ProfileRepo;
import com.example.demo.service.ProfileService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/profile")
@RequiredArgsConstructor
@CrossOrigin
public class ProfileController {
	@Autowired
     ProfileRepo profRepo;
	@Autowired
    ProfileService profServ;
@PostMapping("/post")
public Profile create(@RequestBody Profile prof) {
return profRepo.save(prof);
}
@GetMapping("/getvalues")
List<Profile> getList(){
return profRepo.findAll();
}
//@GetMapping("/getvalues/{id}")
//public Optional<Profile> getbyid(@PathVariable int id){
//	return profServ.getStudent(id);
//}
@DeleteMapping("/delete")
public String delete(@RequestParam int id) {
	return profServ.deleteDetails(id);
}
}
