import React , { useState } from 'react'
import CoursesList from '../components/courses/CoursesList'
import CoursesSearchList from '../components/courses/CoursesSearchList'//for test
import courses from '../resources/courses.json'
import FormCourse from '../components/courses/FormCourse'
import FormCourseSearch from '../components/courses/FormCourseSearch'//for test
import Background from "../layouts/Background"


const courseForm = document.getElementById("course_form");
const courseId = document.getElementById("course_id");
const dataBlock = document.getElementById("data_block_courses");
const results_title = document.getElementById("results_title");
function CoursesPage() {
  const [ addCourseIsOpen , setAddCourseIsOpen,SearchCourseIsOpen,setSearchCourseIsOpen] = useState(false);
  
  function clickAddCourseHandler()
  {
    setAddCourseIsOpen(true)
  }
  function clickSearchCourseHandler()
  {
    setSearchCourseIsOpen(true)
  }

  function closeAddCourse()
  {
    setAddCourseIsOpen(false)
  }
  function closeSearchCourse()
  {
    setSearchCourseIsOpen(false)
  }

  function addCourse()
  {
    alert("Course Added!");
  }
  function SearchCourse()
  {
    alert("Course Search!");
  }

  return (
    <div>
        <div>Courses</div>
        <div>
          <button onClick={clickAddCourseHandler}>Add New Course</button>
        </div>
        <div>
          <button onClick={clickSearchCourseHandler}>Search Course</button>
        </div>
        <div> 
         <button onClick={UpdateCourse}>UpdateCourse</button>
        <button onClick={ DeleteCourse}>DeleteCourse</button>
        </div>
        <div>
          { addCourseIsOpen && <FormCourse closeWindowFunc={closeAddCourse} onOkFunc={addCourse}/>}
          { addCourseIsOpen && <Background closeWindowFunc={closeAddCourse} />}
          <CoursesList courses={courses}/>
        </div>
        <div>
          { SearchCourseIsOpen && <FormCourseSearch closeWindowFunc={closeSearchCourse} onOkFunc={SearchCourse}/>}
          { SearchCourseIsOpen && <Background closeWindowFunc={closeSearchCourse} />}
          <CoursesSearchList courses={courses}/>
        </div>
    </div>
  )
}

async function errorToString(errRes)
{
    try {
        let errMsgStr = "";
        let errJson = await errRes.clone().json();
        if (errJson.errors)
        {
            Object.values(errJson.errors).forEach(err => {
                errMsgStr += err.message +"<br><br>";
            });
        } else {
            errMsgStr += errJson.message + "<br><br>";
        }
        return errMsgStr;
    } catch (err)
    {
        return await errRes.text();
    }
}

function courseToString(course)
{
    let resString =
    ((course._id) ? ("_id: " + course._id +"<br>") : "") +
    ((course.major) ? ("Major: " + course.major +"<br>") : "") +
    ((course.name) ? ("name: " + course.name +"<br>") : "") +
    ((course.number) ? ("number: " + course.number +"<br>") : "") +
    ((course.duration_in_minutes) ? ("Duration: " + course.duration_in_minutes +"<br>") : "") +
    ((course.begin_date) ? ("Begin Date: " + course.begin_date +"<br>") : "") +
    ((course.end_date) ? ("End Date: " + course.end_date +"<br>") : "") + "<br>";
    return resString;
}

function studentToString(student)
{
    let resString =
    ((student._id) ? ("_id: " + student._id +"<br>") : "") +

    ((student.first_name) ? ("First Name: " + student.first_name +"<br>") : "") +

    ((student.last_name) ? ("Last Name: " + student.last_name +"<br>") : "") +

    ((student.email) ? ("email: " + student.email +"<br>") : "") +

    ((student.date_of_birth) ? ("Date of Birth: " + student.date_of_birth +"<br>") : "") + 
    (((student.courses.length > 0) &&
     (typeof student.courses[0] === "object")) ?
     ("Courses:<br><br>" + coursesString(student.courses)
     +"<br>") : "") + "<br>";

    return resString;
}

function coursesString(courses)
{
    let courseString = "";
    courses.forEach(course => {
        courseString += courseToString(course) + " -----<br>";
    })
    return courseString;
}
async function resToString(res, isStudent)
{
    try {
        let resString = "";
        let jsonRes = await res.clone().json();
        if(Array.isArray(jsonRes))
        {
            jsonRes.forEach(item => {
                if(isStudent)
                    resString += studentToString(item);
                else
                    resString += courseToString(item);
                });
        } else {
            if(isStudent)
                resString += studentToString(jsonRes);
            else
                resString += courseToString(jsonRes);
        }
        return resString;
    } catch (err)
    {
        return await res.text();
    }
}
async function UpdateCourse()
{

    try {

      if(courseId.value ==="")
      {
        dataBlock.innerHTML = "id הוא שדה חובה"
        return;
      }
        let data = new FormData(courseForm);
        
        data.delete("_id");

       
        let jsonForm = JSON.stringify(Object.fromEntries(data), this.replacer);

        let res = await fetch('http://localhost:3000/courses/'+courseId.value,
            {
                method: 'PATCH',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : jsonForm
            });
        results_title.innerHTML = ":תוצאות עדכון קורס"
        if (!res.ok)
        {
            dataBlock.innerHTML = await errorToString(res);
        } else {
            dataBlock.innerHTML = await resToString(res);
        }
    } catch (err)
    {
        dataBlock.innerHTML = "...משהו לא תקין";
        console.log(err);
    }
}



async function DeleteCourse()
{

    try {

      if(courseId.value ==="")
      {
        dataBlock.innerHTML = "id הוא שדה חובה"
        return;
      }
        
      

        let res = await fetch('http://localhost:3000/courses/'+courseId.value,
            {
                method: 'DELETE',
                headers : {
                    'Content-Type' : 'application/json'
                },
                
            });
        results_title.innerHTML = ":תוצאות מחיקת קורס"
        if (!res.ok)
        {
            dataBlock.innerHTML = await errorToString(res);
        } else {
            dataBlock.innerHTML = await resToString(res);
        }
    } catch (err)
    {
        dataBlock.innerHTML = "...משהו לא תקין";
        console.log(err);
    }
}



export default CoursesPage