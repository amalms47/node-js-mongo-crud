const mongo=require('mongoose');

//MongoDB connection 

mongo.connect('mongodb://localhost/playground')
.then(()=>console.log('connected to db'))
.catch(err=>console.log('could not connect',err));

//Schema

const courseSchema=new mongo.Schema({
    name:String,
    author:String,
    tags:[String],                              // represents array
    date:{type:Date,default:Date.now},
    isPublished:Boolean
})



// Creating models

const Course=mongo.model('Course',courseSchema);  //creating a class called Course



// insert courses 

async function createCourse() {
    
 const course=new Course({                            //creating object course  of class Course 
    name:'Angular.js course',
    author:'Anoop',
    tags:['Angular','Frontend'],
    isPublished:true
 });

 const result=await course.save();
 console.log(result);

}


// get courses

async function getCourses(){

    const course=await Course

    .find()                                                        
                                                 
    console.log(course);
}


// update course 



async function updateCourses(id){

  /*  const course=await Course

    .findById(id)

    if(!course) return;

    course.isPublished=true;
    course.author = 'Amal author';

    const res=course.save();
    console.log(res);
    */


    const course=await Course               // update first method
    .findByIdAndUpdate(id,{
        $set:{
            author:'Jaison',
            isPublished:false
        }
    })
    console.log(course);

}



//delete course

async function deleteCourse(id){

    const course=await Course.findByIdAndRemove(id);
    console.log(course);
}

//updateCourses('5b5aa1ae8e2c9a0f389bfc5a');

//createCourse();

//getCourses();


deleteCourse('5b5aa1ae8e2c9a0f389bfc5a');