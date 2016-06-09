package by.itechart.reactlesson.repository;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

import by.itechart.reactlesson.model.Author;
import by.itechart.reactlesson.model.Book;
import by.itechart.reactlesson.model.Genre;

@Configuration
public class RepositoryConfig extends RepositoryRestMvcConfiguration {
    @Override
    protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Genre.class);
        config.exposeIdsFor(Author.class);
        config.exposeIdsFor(Book.class);
    }
}