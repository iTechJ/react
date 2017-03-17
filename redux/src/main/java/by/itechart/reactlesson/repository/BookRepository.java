package by.itechart.reactlesson.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import by.itechart.reactlesson.model.Book;

@RepositoryRestResource
public interface BookRepository extends CrudRepository<Book, Integer> {

}
