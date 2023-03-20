import React from 'react'
import PopWindow from '../../layouts/PopWindow'
import styles from '../students/Formstuden.module.css'

function FormStudentsCourses(props) {
  return (
    <div>
        <PopWindow closeWindowFunc={props.closeWindowFunc} onOkFunc={props.onOkFunc}>
        <form>
            <div className={styles.formRow}>
                <label htmlFor="major">Major:</label>
                <input name="major" placeholder="Department"/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="name">Name:</label>
                <input name="name" placeholder="Mandatory"/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="number">Number:</label>
                <input name="number" placeholder="100-599"/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="duration_in_minutes">Duration:</label>
                <input name="duration_in_minutes" placeholder="In minutes(60-180)"/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="begin_date">Begin Date:</label>
                <input name="begin_date" placeholder="YYYY-MM-DD"/>
            </div>
            <div className={styles.formRow}>
                <label htmlFor="end_date">End Date</label>
                <input name="end_date" placeholder="YYYY-MM-DD"/>
            </div>
        </form>
        </PopWindow>
    </div>
  )
}

export default FormStudentsCourses