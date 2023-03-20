
import React from 'react'
import styles from './CourseItem.module.css'
import Card from '../ui/Card'


function CourseItem(props) {
  
  
  let course = props.course

  
  return (
    <Card>
    <div className={styles.courseItem}>
      
        <div className={styles.imgCol}> <img className={styles.img} alt="logo" src={course}/> </div>

        <div className={styles.majorCol}>{course.major}</div>

        <div className={styles.titleCol}>
            <div>{course.number} </div>
            <div>{course.name} </div>
        </div>

        <div className={styles.durationCol}>{course.duration_in_minutes}</div>

        <div className={styles.updateCol}>
            <button>Update</button>
        </div>
        <div className={styles.deleteCol}>
            <button>Delete</button>
        </div>
        
    </div>
    </Card>
  )
}

export default CourseItem