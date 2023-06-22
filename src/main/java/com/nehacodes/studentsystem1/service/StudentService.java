package com.nehacodes.studentsystem1.service;

import com.nehacodes.studentsystem1.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent (Student student);
    public List<Student>getAllStudents();
}
