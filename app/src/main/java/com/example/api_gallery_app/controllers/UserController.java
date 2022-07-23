package com.example.api_gallery_app.controllers;
import com.example.api_gallery_app.entity.UserEntity;
import com.example.api_gallery_app.exeception.UserAlreadyExistException;
import com.example.api_gallery_app.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Optional;

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
    public ResponseEntity save(@RequestBody UserEntity user) throws UserAlreadyExistException {
        //check for existing
        //use findByUserN\\\\
        //if(userRepo.findAll(user.getUsername()) != null){
        //    return ResponseEntity.badRequest().body("User with this name exists yet.");
        //
        // Step 1: Establishing a Connection
        String INSERT_USERS_SQL = "INSERT INTO USER_ENTITY" +
                "  (username, password) VALUES " +
                " ( ?, ?);";
        try (Connection connection = DriverManager
                .getConnection("jdbc:mysql://localhost:3306/gallery_api?useUnicode=true&useSSL=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC", "admin", "elkin474290");

             // Step 2:Create a statement using connection object
             PreparedStatement preparedStatement = connection.prepareStatement(INSERT_USERS_SQL)) {
            preparedStatement.setString(1, user.getUsername());
            preparedStatement.setString(2, user.getPassword());


            System.out.println(preparedStatement);
            // Step 3: Execute the query or update query
            preparedStatement.executeUpdate();
        } catch (SQLException e) {

            // print SQL exception information
            printSQLException(e);
        }

        //userRepo.save(user);
        return ResponseEntity.ok("User is saved");
    }

    public static void printSQLException(SQLException ex) {
        for (Throwable e: ex) {
            if (e instanceof SQLException) {
                e.printStackTrace(System.err);
                System.err.println("SQLState: " + ((SQLException) e).getSQLState());
                System.err.println("Error Code: " + ((SQLException) e).getErrorCode());
                System.err.println("Message: " + e.getMessage());
                Throwable t = ex.getCause();
                while (t != null) {
                    System.out.println("Cause: " + t);
                    t = t.getCause();
                }
            }
        }
    }
    //return Data about certain user
    @GetMapping("/get_user")
    public Optional<UserEntity> get_user_by_Id(@RequestParam  Long id){

        return userRepo.findById(id);
    }
}
