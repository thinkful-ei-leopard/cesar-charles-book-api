import React from 'react'
// import App from 'App'

class Search extends React.Component{
  render(){
    return(
      <form id='search-bar' onSubmit={ e => handleSubmit(e)} >
        <label id='input-label'>
        Search:
        <input type="text" name="book" value={this.props.state.search} onChange={e => {
            this.setState({search: e.target.value}) 
          }}/>
         </label>  
         <button type="submit" >Search</button>
        </form>
        
    )
    
  }
}  

function handleSubmit(e) {
  e.preventDefault();
  console.log(this.props.state.search)
}



export default Search;
