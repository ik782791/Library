package com.example.librarydemo;

import java.time.LocalDate;
import javax.persistence.*;



@Entity
@Table(name="bookdet")
public class bookdet 
{
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)		
		private int transid;
		
		
		@Column(name="bkids")
		private int bkids;
		
		@Column(name="studentname")
		private String studentname;
		
		@Column(name="fine")
		private int fine;
		
		@Column(name="returndate")
		private LocalDate returndate;
		
		@Column(name="issuedate")
		private LocalDate issuedate;

		public int getTransid() {
			return transid;
		}

		public void setTransid(int transid) {
			this.transid = transid;
		}

		public int getBkids() {
			return bkids;
		}

		public void setBkids(int bkids) {
			this.bkids = bkids;
		}

		public String getStudentname() {
			return studentname;
		}

		public void setStudentname(String studentname) {
			this.studentname = studentname;
		}

		public int getFine() {
			return fine;
		}

		public void setFine(int fine) {
			this.fine = fine;
		}

		public LocalDate getReturndate() {
			return returndate;
		}

		public void setReturndate(LocalDate returndate) {
			this.returndate = returndate;
		}

		public LocalDate getIssuedate() {
			return issuedate;
		}

		public void setIssuedate(LocalDate issuedate) {
			this.issuedate = issuedate;
		}
		
		

		
		
	
}
