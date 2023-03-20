import React from 'react'
import styles from './CoursesList.module.css'
import CourSearchItem from '../courses/CourSearchItem'
//for test
//for test
//for test
//for test
//for test
function CoursesSearchList(props) {
  return (
    <ul className={styles.courseList}>
        {props.courses.map((course) => <li key={course._id}>
          <CourSearchItem course={course}/></li>)}
    </ul>
  )
}

export default CoursesSearchList