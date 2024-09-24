
// external styling
/*
just use the default app.cc or index.css file that has been created by default
*/ 
// modules 
// internal styling
/*
for an internal styling you'll have to
 declare a variable styles and insert all
  the css properties inside
*/ 

// const styles = {
//         backgroundColor: "lightblue",
//         marginLeft: "50px,",
//         marginRight: "20px,"
// }

function Button() {

    return(

            <button className="btn">click me</button>
            // <button style={styles}>click me</button>

    )
}

export default Button