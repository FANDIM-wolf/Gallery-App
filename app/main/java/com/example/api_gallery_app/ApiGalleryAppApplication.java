package com.example.api_gallery_app;

import com.example.api_gallery_app.controllers.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
		FileStorageProperties.class
})
public class ApiGalleryAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGalleryAppApplication.class, args);
	}

}
