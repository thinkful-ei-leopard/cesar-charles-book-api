import React from 'react'

class Search extends React.Component{
  render(){
    return(
      <form id='search-bar'>
        <label id='input-label'>
        Search:
        <input type="text" name="book" />
         </label>  
         <button type="submit" >Search</button>
        </form>
    )
  }
}  

export default Search;
