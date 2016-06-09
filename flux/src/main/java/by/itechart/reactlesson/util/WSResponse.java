package by.itechart.reactlesson.util;

import org.springframework.http.HttpStatus;

public class WSResponse
{
	static final String SUCCESS = "success";
	
	private int status;
	private String message;
	
	public WSResponse(String message, HttpStatus codeStatus)
	{
		this.setStatus(codeStatus.value());
		this.setMessage(message);
	}

	public static WSResponse success(String message) {
		return new WSResponse(message, HttpStatus.OK);
	}
	
	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
