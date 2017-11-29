package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BooksService {
	
	private final BooksRepository booksRepository;
	
	@Autowired
	public BooksService( BooksRepository booksRepository){
		this.booksRepository = booksRepository;
	}

	public List<Books> findAllBooks() {
		// TODO Auto-generated method stub
		List<Books> booksList = booksRepository.findAll();
		System.out.println("------Books List ------"+ booksList.size());
		return booksList;
	}
	
	
	
	
	
}
