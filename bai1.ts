class Student{
    id:number
    name:string
    enrolledCourses: Course[] =[];
    constructor(id:number,name:string){
        this.id = id
        this.name = name
        this.enrolledCourses =[]
    }   
    enroll(courses: Course):void{
        this.enrolledCourses.push(course)
    }
}
class Instructor{
    id:number
    name:string
    constructor( id:number,name:string){
        this.id=id
        this.name=name
    }
    
    createCourse(title: string): Course {
        return new Course(title, this);
    }

    createLesson(title: string): Lesson {
        return new Lesson(title);
    }

    createAssignment(title: string): Assignment {
        return new Assignment(title);
    }

    createAssessment(title: string): Assessment {
        return new Assessment(title);
    }

}
class Course{
    title: string;
    instructor: Instructor;
    lessons: Lesson[];
    assessments: Assessment[];

    constructor(title: string, instructor: Instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
class Lesson {
    title: string;
    assignments: Assignment[];

    constructor(title: string) {
        this.title = title;
        this.assignments = [];
    }
}

class Assignment {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

class Assessment {
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

let instructor = new Instructor(18, "Trang")
let course = instructor.createCourse("yfttgftf")
let ls = instructor.createLesson("hahuyentrang")
let ls1 = instructor.createLesson("haaaa")
let assessments = instructor.createAssignment("uni1")
let assessment = instructor.createAssignment("uuuuuuu")
course.lessons.push(ls,ls1)
ls.assignments.push(assessments)
ls1.assignments.push(assessment) 
course.assessments.push(assessment,assessments)


let std = new Student(20, "Trang")
let std2 = new Student(10, "HD")

std.enroll(course);
std2.enroll(course);
console.log(std.enrolledCourses);
console.log(std2.enrolledCourses);



