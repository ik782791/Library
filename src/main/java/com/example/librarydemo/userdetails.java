package com.example.librarydemo;

import javax.persistence.*;

@Entity
@Table(name="userdetails")
public class userdetails 
{
	@Id
	private String user_email;
	
	@Column(name="password")
	private String password;
	
	@Column(name="role")
	private String role;

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	
	
	
}
