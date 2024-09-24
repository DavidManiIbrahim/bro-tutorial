import styles from './Button.modules.css'

// external styling
/* modules {
 you'll create a folder with a jsx file
  and a style.module.css file and import 
  it then declare it as a className
  #the className in modules is generated 
  using a hash so there are no naming conflicts.
 }*/
// internal styling

function Button() {

    return(

            <button className={styles.button}>click me</button>

    )
}

export default Button