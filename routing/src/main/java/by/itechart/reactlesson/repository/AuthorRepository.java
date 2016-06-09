package by.itechart.reactlesson.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import by.itechart.reactlesson.model.Author;

@RepositoryRestResource
public interface AuthorRepository extends CrudRepository<Author, Integer> {

}
