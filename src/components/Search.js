import React from 'react'

class Search extends React.Component{
  render(){
    return(
      <form>
        <label>
        Search:
        <input type="text" name="book"/>
         </label>  
         <button type="submit" >Search</button>
        </form>
    );
  }
}    );
