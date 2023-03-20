import React from 'react'
import styles from '../students/studentItem.module.css'
import Card from '../ui/Card'



function Studentitem(props) {
  
  
  let course = props.course

  
  return (
    <Card>
    <div className={styles.courseItem}>
      
        <div className={styles.imgCol}> <img className={styles.img} alt="img" data-twic-src="../students/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg"src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fstudent&psig=AOvVaw2-5tT7wRAss87S6313sj6H&ust=1651209373426000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCICdlruAtvcCFQAAAAAdAAAAABAD"/> </div>

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

export default Studentitem