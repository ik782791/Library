package com.example.librarydemo;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity.BodyBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class SpringBootHomeController
{
	@Autowired
	userService user_serv;
	
	@Autowired
	bookdetServ bdserv;
	
	@Autowired
	booksServ book_serv;
	
	@CrossOrigin(origins="http:/localhost:4200/")
	@GetMapping("/allbooks")
	public List<books> getallbooks()
	{
		List<books> L = book_serv.findallbooks();
		for(books b : L)
		{			
			b.setImage(decompressBytes(b.getImage()));
		}
		
		return L;
	}
	@CrossOrigin(origins="http:/localhost:4200/")
	@PutMapping("/updatebookbyid")
	@ResponseBody()
	public boolean updatebookprice(@RequestBody books b)
	{
		return book_serv.updatebookprice(b);
	}
	
	@CrossOrigin(origins="http:/localhost:4200/")
	@DeleteMapping("/deletebookid/{dt}")
	public void deletebookid(@PathVariable("dt")int dt)
	{
		book_serv.deletebook(dt);
	}
	@CrossOrigin(origins="http:/localhost:4200/")
	@DeleteMapping("/deletebookdetid/{dt}")
	public void deletebookdetid(@PathVariable("dt")int dt)
	{
		book_serv.updateissuebook(dt);
		bdserv.deletebook(dt);
	}
	
	@CrossOrigin(origins="http:/localhost:4200/")	
	@GetMapping("/finduseremail/{em}")
	public boolean findemail(@PathVariable("em")String em)
	{
		return user_serv.findemail(em);
	}
	
	@CrossOrigin(origins="http:/localhost:4200/")
	@GetMapping("/findtransid/{bk}")
	public bookdet findtransid(@PathVariable("bk")String bk)
	{
		return bdserv.findtransid(Integer.valueOf(bk));
	}
	
	@CrossOrigin(origins="http:/localhost:4200/")
	@PostMapping("/addnewbook")
	@ResponseBody()
	public int addnewbookdetails(@RequestBody books b)
	{
		return book_serv.addbook(b);
	}
	@CrossOrigin(origins="http:/localhost:4200/")
	@PostMapping("/issuebook")
	@ResponseBody()
	public void  addnewbookdetails(@RequestBody bookdet b)
	{
		bdserv.addbook(b);
	}
	
	@CrossOrigin(origins="http:/localhost:4200/")
	@GetMapping("/findbybookid/{bkid}")
	public books findbybkid(@PathVariable("bkid")int bkid)
	{
		return book_serv.findbyid(bkid);
	}
	
	@CrossOrigin(origins="http:/localhost:4200/")
	@PostMapping("/uploadimage")
	public void uploadImage(@RequestParam("image") MultipartFile file,@RequestParam int bkid ) throws IOException {

        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        
        books b = book_serv.findbyid(bkid);
        
        b.setImage(compressBytes(file.getBytes()));

        book_serv.updateimage(b);
                      			       
    }
	@CrossOrigin(origins="http:/localhost:4200/")
	@GetMapping(path = { "/getimage/{bkid}" })
    public books getImage(@PathVariable("bkid") int bkid) throws IOException {

		 books b = book_serv.findbyid(bkid);

		 b.setImage(decompressBytes(b.getImage()));
        return b;
    }
	
	// compress the image bytes before storing it in the database

    public static byte[] compressBytes(byte[] data) {

        Deflater deflater = new Deflater();

        deflater.setInput(data);

        deflater.finish();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);

        byte[] buffer = new byte[1024];

        while (!deflater.finished()) {

            int count = deflater.deflate(buffer);

            outputStream.write(buffer, 0, count);

        }

        try {

            outputStream.close();

        } catch (IOException e) {

        }

        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);

        return outputStream.toByteArray();
    }
    
        
    public static byte[] decompressBytes(byte[] data) {

        Inflater inflater = new Inflater();

        inflater.setInput(data);

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);

        byte[] buffer = new byte[1024];

        try {

            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);

                outputStream.write(buffer, 0, count);

            }

            outputStream.close();

        } catch (IOException ioe) {

        } catch (DataFormatException e) {

        }

        return outputStream.toByteArray();
    }
}
