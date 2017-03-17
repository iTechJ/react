package by.itechart.reactlesson.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import by.itechart.reactlesson.model.Genre;
import by.itechart.reactlesson.repository.GenreRepository;
import by.itechart.reactlesson.util.NotFoundException;
import by.itechart.reactlesson.util.WSResponse;

@RestController
@RequestMapping("/api/genres")
public class GenreController {

	@Autowired
	private GenreRepository genreRepository;

	@RequestMapping(method = RequestMethod.GET)
	public Iterable<Genre> getGenres() {
		return genreRepository.findAll();
	}

	@RequestMapping(method = RequestMethod.POST)
	public Genre saveGenre(@Validated @RequestBody Genre genre) {
		genreRepository.save(genre);
		return genre;
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.PUT)
	public Genre updateGenre(@Validated @RequestBody Genre genre) {
		Genre savedGenre = genreRepository.findOne(genre.getId());
		if (savedGenre != null) {
			savedGenre.setName(genre.getName());
			savedGenre.setDescription(genre.getDescription());

			genreRepository.save(savedGenre);
			return savedGenre;
		}

		throw new NotFoundException("Genre", genre.getId());
	}
	
	@RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
	public WSResponse deleteGenre(@PathVariable Integer id)
	{
		genreRepository.delete(id);
		return WSResponse.success("Group #" + id + " deleted successfully");
	}
}

