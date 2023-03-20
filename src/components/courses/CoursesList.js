import React from 'react'
import styles from './CoursesList.module.css'
import CourseItem from './CourseItem'

function CoursesList(props) {
  return (
    <ul className={styles.courseList}>
        {props.courses.map((course) => <li key={course._id}>
          <CourseItem course={course}/></li>)}
    </ul>
  )
}

export default CoursesList