package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Search;

@Repository
public interface SearchRepo extends JpaRepository<Search,Integer>{

}
