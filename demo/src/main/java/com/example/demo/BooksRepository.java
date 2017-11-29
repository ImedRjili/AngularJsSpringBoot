package com.example.demo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BooksRepository extends MongoRepository<Books,String>{

	List<Books> findAll();
	
	Books save(Books book);
	
	void delete(Books book);
	
	Books findOne(String Id);
	
}
