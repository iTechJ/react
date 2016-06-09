package by.itechart.reactlesson.controller;

import java.time.OffsetDateTime;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.ImmutableMap;

@RestController
public class HelloController {

	 @RequestMapping("/api/hello")
	  public Map<String, String> hello() {
	       return ImmutableMap.of(
	              "name", "Freddy",
	              "timestamp", OffsetDateTime.now().toString()
	       );
	  }
}
