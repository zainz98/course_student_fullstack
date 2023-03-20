import React from 'react'
import styles from '../students/studentItem.module.css'
import Card from '../ui/Card'


function StudentsCoursesitem(props) {
  
  
  let course = props.course

  
  return (
    <Card>
    <div className={styles.courseItem}>
      
        <div className={styles.imgCol}> <img className={styles.img} alt="img" data-twic-src="../courses/Course-after-MBA.png"src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fleverageedu.com%2Fblog%2Fcourse-after-mba%2F&psig=AOvVaw0aiLfysHoLnipG3r7MFJXh&ust=1651209424924000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIjQ2c2AtvcCFQAAAAAdAAAAABAD"/> </div>

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

export default StudentsCoursesitem