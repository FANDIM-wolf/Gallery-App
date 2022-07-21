package com.example.api_gallery_app.exeception;

public class UserAlreadyExistException  extends  Exception{
    public UserAlreadyExistException(String message){
        super(message);
    }
}
