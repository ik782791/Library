package com.example.librarydemo;


import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("bdserv")
public class bookdetServ {

	@Autowired
	public bookdetRepo bkrp;
	
	@Autowired
	public booksRepo bks;
	
	@Autowired
	booksServ book_serv;
	
	public void addbook(bookdet bk)
	{
		bkrp.saveAndFlush(bk);
	
		books curbk = book_serv.findbyid(bk.getBkids());
			
		curbk.setStatus("Issue");
		bks.saveAndFlush(curbk);
			
	}
	
	public bookdet findtransid(int bk)
	{ 
		List<bookdet> LI = bkrp.findAll();
		Iterator I = LI.iterator();
		while(I.hasNext())
		{
			bookdet d = (bookdet)I.next();
			if(bk == d.getBkids())
			{
				System.out.println(d.getBkids());	
				return d;
			}
		}
			
		return null;	
	}
	
	public boolean deletebook(int dt)
	{ 
		List<bookdet> LI = bkrp.findAll();
		Iterator I = LI.iterator();
		while(I.hasNext())
		{
			bookdet d = (bookdet)I.next();
			if(dt == d.getBkids())
			{
				bkrp.delete(d);
				return true;
			}
		}
			
		return false;
	}
	
	
	
		
}
