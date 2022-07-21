package com.example.api_gallery_app.service;

import com.example.api_gallery_app.entity.UserEntity;
import com.example.api_gallery_app.exeception.UserAlreadyExistException;
import com.example.api_gallery_app.repository.UserRepo;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;

public class UserService {
    @Autowired
    private UserRepo userRepo;
    public UserEntity registration(UserEntity user) throws UserAlreadyExistException{
        Long user_id = user.getId();
        if(userRepo.findById(user_id) != null){
            throw  new UserAlreadyExistException("User already exists");
        }
        return  userRepo.save(user);
    }
}
