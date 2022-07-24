package com.example.api_gallery_app;

import com.example.api_gallery_app.controllers.FileStorageProperties;
import org.junit.jupiter.api.Test;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@EnableConfigurationProperties({
		FileStorageProperties.class
})
class ApiGalleryAppApplicationTests {

	@Test
	void contextLoads() {
	}

}
