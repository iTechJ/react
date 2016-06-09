package by.itechart.reactlesson.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="book")
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="book_id")
	private int id;
	
	@Column(name="book_name")
	@Size(min = 1, max = 100)
	@NotNull
	private String bookName;
	
	@Column(name="book_description")
	@Size(min = 1, max = 1500)
	@NotNull
	private String bookDescription;
	
	@Column(name="publish_date")
	@NotNull
	@Size(min = 1, max = 20)
	private String publishDate;
	
	@Column(name="book_author_id")
	@NotNull
	private Integer bookAuthorId;
	
	@Column(name="book_genre_id")
	@NotNull
	private Integer bookGenreId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookDescription() {
		return bookDescription;
	}

	public void setBookDescription(String bookDescription) {
		this.bookDescription = bookDescription;
	}

	public String getPublishDate() {
		return publishDate;
	}

	public void setPublishDate(String publishDate) {
		this.publishDate = publishDate;
	}

	public Integer getBookAuthorId() {
		return bookAuthorId;
	}

	public void setBookAuthorId(Integer bookAuthorId) {
		this.bookAuthorId = bookAuthorId;
	}

	public Integer getBookGenreId() {
		return bookGenreId;
	}

	public void setBookGenreId(Integer bookGenreId) {
		this.bookGenreId = bookGenreId;
	}
}
