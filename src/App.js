
import { Component } from 'react';
import Form from "./Components/Form";
import List from "./Components/List";
import "./index.css";

class App extends Component {
  state = {
    courses : [
        {name : "HTML"},
        {name : "CSS"},
        {name : "JS"},
        
    ],
    current :''

}


//updateCousre
updateCousre =(e) => {
  this.setState({
    current : e.target.value
  })
}


//addCousre
addCousre =(e) => {
 e.preventDefault();
  let current = this.state.current
  let courses =this.state.courses
  if(current.length>1){
    courses.push({name : current})
    this.setState({
      courses , 
      current : ''
  })
  }
  
}



//deleteCourse
deleteCourse = (index) => {
  let courses =this.state.courses;
  courses.splice(index , 1);
  this.setState({
    courses
  })
}


//editCourse
editCourse = (index , value) => {
  let courses =this.state.courses;
  let cousre =courses[index];
  cousre['name'] =value;
  this.setState({
    courses
  })
  
}



  render(){
    const {courses} = this.state;
    const courseList = courses.map( (course , index) =>{
          return <List details ={course} key={index} index ={index} deleteCourse ={this.deleteCourse} editCourse={this.editCourse}  />
       })
    return (
      <section className="App">
        <h2>Add Course</h2>
        <Form current = {this.state.current} updateCousre = {this.updateCousre} addCousre = {this.addCousre} />
        <ul >{ this.state.courses.length > 0 ? courseList : <p>No Courses To Show! Please Add New Course.</p> }</ul>
      </section>
    );
  }
  
}

export default App;
