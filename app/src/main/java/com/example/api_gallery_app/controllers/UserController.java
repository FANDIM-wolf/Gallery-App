package com.example.api_gallery_app.controllers;
import com.example.api_gallery_app.entity.UserEntity;
import com.example.api_gallery_app.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepo userRepo;
    @GetMapping("/all")
    public String greeting(){
        return "/users";
    }
    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody UserEntity user){
        //check for existing
        //use findByUserN\\\\
        //if(userRepo.findAll(user.getUsername()) != null){
        //    return ResponseEntity.badRequest().body("User with this name exists yet.");
        //}
        userRepo.save(user);
        return ResponseEntity.ok("User is saved");
    }

}
