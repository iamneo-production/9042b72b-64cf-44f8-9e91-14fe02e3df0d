package com.example.demo.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Search;
import com.example.demo.repository.SearchRepo;

import lombok.RequiredArgsConstructor;
@RequiredArgsConstructor
@Service
public class SearchService {
private final SearchRepo searchRepo;
public Optional<Search> getStudent(int id){
	return searchRepo.findById(id);
}

}
