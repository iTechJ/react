package by.itechart.reactlesson.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import by.itechart.reactlesson.model.Author;
import by.itechart.reactlesson.repository.AuthorRepository;
import by.itechart.reactlesson.util.NotFoundException;
import by.itechart.reactlesson.util.WSResponse;

@RestController
@RequestMapping("/api/authors")
public class AuthorController {

	@Autowired
	private AuthorRepository repo;

	@RequestMapping(method = RequestMethod.GET)
	public Iterable<Author> getAuthors() {
		return repo.findAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	public Author saveAuthor(@Validated @RequestBody Author author) {
		repo.save(author);
		return author;
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	public Author getSingleAuthor(@PathVariable int id) {
		return repo.findOne(id);
	}
	
	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	public Author updateAuthor(@Validated @RequestBody Author author) {
		Author savedAuthor = repo.findOne(author.getId());
		if (savedAuthor != null) {
			savedAuthor.setDateOfBirth(author.getDateOfBirth());
			savedAuthor.setDateOfDeath(author.getDateOfDeath());
			savedAuthor.setFirstName(author.getFirstName());
			savedAuthor.setLastName(author.getLastName());
			savedAuthor.setOccupation(author.getOccupation());
			savedAuthor.setIsActive(author.getIsActive());
			repo.save(savedAuthor);
			return savedAuthor;
		}

		throw new NotFoundException("Author", author.getId());
	}
	
	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	public WSResponse deleteAuthor(@PathVariable Integer id)
	{
		repo.delete(id);
		return WSResponse.success("Author #" + id + " deleted successfully");
	}
}


