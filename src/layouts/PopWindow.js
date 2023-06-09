import styles from './PopWindow.module.css'
function PopWindow(props) {

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
        <button className={styles.buttonOk} onClick={onOk}>Add</button>
        <button className={styles.buttonClose} onClick={onClose}>Cancel</button>
    </div>
  )
}

export default PopWindow