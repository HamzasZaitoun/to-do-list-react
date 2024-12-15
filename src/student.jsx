import propTypes from 'prop-types'
function student(props)
{
    return(
        <div className="student">
     <p>name: {props.name}</p>
     <p>age: {props.age}</p>
     <p>is he a student?  {props.isStudent}</p>
        </div>
    )
}
student.propTypes=
{
    name : propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,

}
student.defaultProps=
{
    name:"guest",
    age:'N/A',
    isStudent:false,
}
export default student