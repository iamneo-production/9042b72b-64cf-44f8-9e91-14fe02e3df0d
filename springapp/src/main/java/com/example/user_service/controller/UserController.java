package com.example.user_service.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user_service.dto.UserRequest;
import com.example.user_service.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor

public class UserController {
	private final UserService userService;
	
	@PostMapping("/addUserFeedback")
	public ResponseEntity<String> addUserFeedback(@RequestBody UserRequest userRequest){
		userService.addUserFeedback(userRequest);
		return ResponseEntity.status(HttpStatus.OK).body("Feedback added!");
	}
}
