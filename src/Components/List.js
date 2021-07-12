import React ,{ Component} from "react";



class List extends Component {
  state = {
    isEdit : false
  }


 //renderCourse
  renderCourse = () => {
    return(
      <li>
        <span>{this.props.details.name}</span>
        <button onClick = {this.toggleStat} >Edit Cousre</button>
        <button onClick = {() => {this.props.deleteCourse(this.props.index)}}>Delete Course</button>
      </li>
    )}  
 //updateItem
  updateItem = (e)=>{
    e.preventDefault();
    this.props.editCourse(this.props.index ,this.input.value );
    // or use this.props.editCourse(this.props.index ,e.target[0].value ); and delete ref from input
    this.toggleStat();
  }    
 //renderUpdateForm 
  renderUpdateForm = () => {
    return(
      <form onSubmit={this.updateItem} >
        <input type='text' ref ={(v)=> {this.input = v}} defaultValue ={this.props.details.name} />
        <button >Update Cousre</button>
      </form>
    )
  }
 //toggleStat 
 toggleStat = ()=>{
   let {isEdit} = this.state;
   this.setState({
    isEdit : !isEdit
   })
 }


  render(){
    let {isEdit} = this.state;
    return (
      <React.Fragment>
        {isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </React.Fragment>
    );
  }
  
}

export default List;
