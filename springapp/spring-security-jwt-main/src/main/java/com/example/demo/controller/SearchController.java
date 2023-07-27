package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Search;
import com.example.demo.repository.SearchRepo;
import com.example.demo.service.SearchService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class SearchController {
private final SearchRepo searchRepo;
private final SearchService searchServ;
@PostMapping("/post")
public Search create(@RequestBody Search prof) {
return searchRepo.save(prof);
}
@GetMapping("/getvalues")
List<Search> getList(){
return searchRepo.findAll();
}
@GetMapping("/getvalues/{id}")
public Optional<Search> getbyid(@PathVariable int id){
	return searchServ.getStudent(id);
}
}
