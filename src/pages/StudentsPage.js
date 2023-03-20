import React , { useState } from 'react'
import StudentList from '../components/students/StudentList'
import Student from '../resources/Student.json'
import FormStudent from '../components/students/FormStudent'
import Background from "../layouts/Background"
const studentForm=document.getElementById("studentForm");
const StudentId= document.getElementById("StudentId");
const results_title = document.getElementById("results_title");
const dataBlock = document.getElementById("data_block_students");

function StudentsPage() {
  const [ addCourseIsOpen , setAddCourseIsOpen,SearchCourseIsOpen,setSearchCourseIsOpen] = useState(false);
  
  function clickAddCourseHandler()
  {
    setAddCourseIsOpen(true)
  }
  function clickSearchCourseHandler()
  {
    setSearchCourseIsOpen(false)
  }

  function closeAddCourse()
  {
    setAddCourseIsOpen(false)
  }
  function closeSearchCourse()
  {
    setSearchCourseIsOpen(true)
  }

  function addCourse()
  {
    alert("Student Added!");
  }
  function SearchCourse()
  {
    alert("Student Search!");
  }
  

  return (
    <div>
        <div>Student</div>
        <div>
          <button onClick={clickAddCourseHandler}>Add New Student</button>
        </div>
        <div>
          <button onClick={clickSearchCourseHandler}>Search Student</button>
        </div>
        <div>
        <button onClick={UpdateStudent}>Update Student</button>
        <button onClick={DeleteStudent}>Delete Student</button>
        </div>
        <div>
          { addCourseIsOpen && <FormStudent closeWindowFunc={closeAddCourse} onOkFunc={addCourse}/>}
          { addCourseIsOpen && <Background closeWindowFunc={closeAddCourse} />}
          <StudentList courses={Student}/>
        </div>
        <div>
          { SearchCourseIsOpen && <FormStudent closeWindowFunc={closeSearchCourse} onOkFunc={SearchCourse}/>}
          { SearchCourseIsOpen && <Background closeWindowFunc={closeSearchCourse} />}
          <StudentList courses={Student}/>
        </div>
    </div>
  )
}

async function UpdateStudent()
{

    try {

      if(StudentId.value ==="")
      {
        dataBlock.innerHTML = "id הוא שדה חובה"
        return;
      }
        
        let data = new FormData(studentForm);
        
        data.delete("_id");

        let jsonForm = JSON.stringify(Object.fromEntries(data), this.replacer);
        let res = await fetch('http://localhost:3000/students/'+StudentId.value,
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
            dataBlock.innerHTML = await resToString(res,1);
        }
    } catch (err)
    {
        dataBlock.innerHTML = "...משהו לא תקין";
      
        console.log(err);
    }
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
     ("Courses:<br><br>" + (student.courses)
     +"<br>") : "") + "<br>";

    return resString;
}


async function DeleteStudent()
{

  try {

    if(StudentId.value ==="")
    {
      dataBlock.innerHTML = "id הוא שדה חובה"
      return;
    }

      let res = await fetch('http://localhost:3000/students/'+StudentId.value,
          {
              method: 'DELETE',
              headers : {
                  'Content-Type' : 'application/json'
              },
              
          });
      results_title.innerHTML = ": תוצאות מחיקת סטודנט "
      if (!res.ok)
      {
          dataBlock.innerHTML = await errorToString(res);
      } else {
          dataBlock.innerHTML = await resToString(res,1);
      }
  } catch (err)
  {
      dataBlock.innerHTML = "...משהו לא תקין";
      console.log(err);
  }
}


export default StudentsPage