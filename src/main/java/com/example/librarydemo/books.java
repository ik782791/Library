package com.example.librarydemo;


import java.time.LocalDate;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonCreator;
 


@Entity
@Table(name="books")
public class books 
{
	@JsonCreator
	public books(){}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bkid;
	
	@Column(name="bknm")
	private String bknm;
	
	@Column(name="author")
	private String author;
	
	@Column(name="price")
	private int price;
	
	@Column(name="image")
	private byte[] image;
	
	@Column(name="description")
	private String description;
	
	
	
	@Column(name="status")
	private String status;

	public int getBkid() {
		return bkid;
	}

	public void setBkid(int bkid) {
		this.bkid = bkid;
	}

	public String getBknm() {
		return bknm;
	}

	public void setBknm(String bknm) {
		this.bknm = bknm;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	
	

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
