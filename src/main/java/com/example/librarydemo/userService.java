package com.example.librarydemo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("user_serv")
public class userService {

	@Autowired
	public userdetailsRepo userrepo;
	
	public boolean findemail(String em)
	{ 
		Optional<userdetails> e = userrepo.findById(em);
		System.out.println(e.get());
				
		return (e != null ? true : false);
	}
	
	
}