"use strict";
class Student {
    constructor(id, name) {
        this.enrolledCourses = [];
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(courses) {
        this.enrolledCourses.push(course);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(title) {
        return new Lesson(title);
    }
    createAssignment(title) {
        return new Assignment(title);
    }
    createAssessment(title) {
        return new Assessment(title);
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
}
class Assignment {
    constructor(title) {
        this.title = title;
    }
}
class Assessment {
    constructor(title) {
        this.title = title;
    }
}
let instructor = new Instructor(18, "Trang");
let course = instructor.createCourse("yfttgftf");
let ls = instructor.createLesson("hahuyentrang");
let ls1 = instructor.createLesson("haaaa");
let assessments = instructor.createAssignment("uni1");
let assessment = instructor.createAssignment("uuuuuuu");
course.lessons.push(ls, ls1);
ls.assignments.push(assessments);
ls1.assignments.push(assessment);
course.assessments.push(assessment, assessments);
let std = new Student(20, "Trang");
let std2 = new Student(10, "HD");
std.enroll(course);
std2.enroll(course);
console.log(std.enrolledCourses);
console.log(std2.enrolledCourses);
