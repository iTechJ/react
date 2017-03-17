package by.itechart.reactlesson.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import by.itechart.reactlesson.model.Book;
import by.itechart.reactlesson.repository.BookRepository;
import by.itechart.reactlesson.util.NotFoundException;
import by.itechart.reactlesson.util.WSResponse;

@RestController
@RequestMapping("/api/books")
public class BookController {

	@Autowired
	private BookRepository repo;

	@RequestMapping(method = RequestMethod.GET)
	public Iterable<Book> getBooks() {
		return repo.findAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	public Book saveBook(@Validated @RequestBody Book book) {
		repo.save(book);
		return book;
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	public Book updatebook(@Validated @RequestBody Book book) {
		Book savedBook = repo.findOne(book.getId());
		if (savedBook != null) {
			savedBook.setBookDescription(book.getBookDescription());
			savedBook.setBookName(book.getBookName());
			savedBook.setPublishDate(book.getPublishDate());
			savedBook.setBookGenreId(book.getBookGenreId());
			savedBook.setBookAuthorId(book.getBookAuthorId());
			repo.save(savedBook);
			return savedBook;
		}

		throw new NotFoundException("book", book.getId());
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	public WSResponse deletebook(@PathVariable Integer id) {
		repo.delete(id);
		return WSResponse.success("Book #" + id + " deleted successfully");
	}
}
