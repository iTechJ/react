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
@Table(name="genre")
public class Genre {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="genre_id")
	private int id;
	
	@Column(name="name")
	@Size(min = 1, max = 50)
	@NotNull
	private String name;
	
	@Column(name="description")
	@Size(min = 1, max = 500)
	@NotNull
	private String description;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
