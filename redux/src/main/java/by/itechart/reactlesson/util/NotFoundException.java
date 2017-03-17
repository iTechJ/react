package by.itechart.reactlesson.util;

public class NotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NotFoundException() {
		this("Resource not found");
	}

	public NotFoundException(String message) {
		super(message);
	}
	
	public NotFoundException(String name, Integer id) {
		super(String.format("%s #%d not found", name, id));
	}
}
