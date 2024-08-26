package com.example.librarydemo;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("book_serv")
public class booksServ {

	@Autowired
	public booksRepo bkrepo;
	
	public int addbook(books bk)
	{
		bkrepo.saveAndFlush(bk);
		long c = bkrepo.findAll().stream().count();
		return bkrepo.findAll().stream().toList().get((int)c-1).getBkid();
	
	}
	
	public books findbyid(int bkid)
	{ 
		Optional<books> e = bkrepo.findById(bkid);						
		return e.get();	
	}
	
	public String updateimage(books bk)
	{
		bkrepo.saveAndFlush(bk);		
		return "Image Uploaded and Updated!";
			
	}
	
	public List<books> findallbooks()
		{
			return bkrepo.findAll();		
		}
	
	public boolean  updatebookprice(books b)
	{
		books b1 = bkrepo.findById(b.getBkid()).get();
		
		b1.setBkid(b.getBkid());
		b1.setBknm(b.getBknm());
		b1.setDescription(b.getDescription());
		b1.setAuthor(b.getAuthor());
		b1.setImage(b.getImage());
		b1.setPrice(b.getPrice());
		b1.setStatus(b.getStatus());
		
		bkrepo.saveAndFlush(b1);
		
		return true;
		
	}
	
	
	public void deletebook(int dt)
	{
		bkrepo.deleteById(dt);
	}
	
	public boolean updateissuebook(int dt)
	{
		books b1 = bkrepo.findById(dt).get();
		books  b = new books();
		
		b.setBkid(b1.getBkid());
		b.setBknm(b1.getBknm());
		b.setDescription(b1.getDescription());
		b.setAuthor(b1.getAuthor());
		b.setImage(b1.getImage());
		b.setPrice(b1.getPrice());
		b.setStatus("Available");
		
		bkrepo.saveAndFlush(b);
		
		return true;
	}
	
	
	
	
}