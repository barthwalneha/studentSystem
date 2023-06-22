package com.nehacodes.studentsystem1.controller;

import com.nehacodes.studentsystem1.model.Student;
import com.nehacodes.studentsystem1.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/student")
public class StudentController {
    @Autowired
    private StudentService studentService;
    @PostMapping(value = "/add")
    public ResponseEntity<String> add(@RequestBody Student student){
        studentService.saveStudent(student);
        return ResponseEntity.ok(String.format("Student %s added",student.getName()));
    }
    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
}
