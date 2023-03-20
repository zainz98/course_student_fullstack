import React , { useState } from 'react'
import StudentsCoursesList from '../components/StudentsCourses/StudentsCoursesList'
import courses from '../resources/courses.json'
import FormStudentsCourses from '../components/StudentsCourses/FormStudentsCourses'
import Background from "../layouts/Background"


function StudentsCoursesPage() {
  const [SearchCourseIsOpen,setSearchCourseIsOpen] = useState(false);
  
  
  function clickSearchCourseHandler()
  {
    setSearchCourseIsOpen(true)
  }

  function closeSearchCourse()
  {
    setSearchCourseIsOpen(false)
  }


  function SearchCourse()
  {
    alert("Course Search!");
  }

  return (
    <div>
        <div>StudentsCoursesPage</div>
        
        <div>
          <button onClick={clickSearchCourseHandler}>Search Course</button>
        </div>
        <div>
          { SearchCourseIsOpen && <FormStudentsCourses closeWindowFunc={closeSearchCourse} onOkFunc={SearchCourse}/>}
          { SearchCourseIsOpen && <Background closeWindowFunc={closeSearchCourse} />}
          <StudentsCoursesList courses={courses}/>
        </div>
    </div>
  )
}

export default StudentsCoursesPage