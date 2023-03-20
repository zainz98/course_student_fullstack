import React from 'react'
import styles from '../students/studentItem.module.css'
import StudentsCoursesitem from '../StudentsCourses/StudentsCoursesitem'

function StudentsCoursesList(props) {
  return (
    <ul className={styles.StudentsCoursesList}>
        {props.courses.map((course) => <li key={course._id}>
          <StudentsCoursesitem course={course}/></li>)}
    </ul>
  )
  
}

export default StudentsCoursesList