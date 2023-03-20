import styles from './PopWindow.module.css'
function PopWindowsearch(props) {

    function onClose(){
        props.closeWindowFunc()
    }
    function onOk(){
        props.closeWindowFunc()
        props.onOkFunc()
    }
  
    return (
    <div className={styles.popWindow}>
        {props.children}
        <button className={styles.buttonOk} onClick={onOk}>search</button>
        <button className={styles.buttonClose} onClick={onClose}>Cancel</button>
    </div>
  )
}

export default PopWindowsearch