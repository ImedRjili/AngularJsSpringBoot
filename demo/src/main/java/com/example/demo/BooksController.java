package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1.0/books")
//@CrossOrigin(origins = {"http://localhost:8585"}, maxAge = 4800, allowCredentials = "false")
@CrossOrigin("*")
public class BooksController {
	
	private final BooksService booksService;
	
	@Autowired
	public BooksController (BooksService booksService){
		this.booksService = booksService;
	}

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Books> getAllBooks(){
		
		return booksService.findAllBooks();
		
		
	}
}
