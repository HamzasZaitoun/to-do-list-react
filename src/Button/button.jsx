// import styles from './button.module.css'
function Button()

{
    const styles = {
     backgroundColor:"black",
    border: "none",
    borderRadius: "15px",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    cursor:"pointer"
    }

return(

/* <button className={styles.button}>click me</button> */
<button style={styles}>click me</button>
)

}

export default Button