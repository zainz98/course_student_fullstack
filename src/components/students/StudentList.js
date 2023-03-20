import React from 'react'
import styles from './StudentList.module.css'
import Studentitem from '../students/Studentitem'

function StudentList(props) {
  return (
    <ul className={styles.courseList}>
        {props.courses.map((course) => <li key={course._id}>
          <Studentitem course={course}/></li>)}
    </ul>
  )
  
}

export default StudentList