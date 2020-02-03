import React from 'react'


class Filter extends React.Component{
  render(){
    return(
      <form id='dropdown'>
        <label>
        Print Type:
        <select>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
         </label>  
         <label>
           Book Type:
           <select>
          <option value="nofilter">No Filter</option>
          <option value="ebooks">Ebooks</option>
          <option value="free-ebooks">Free Ebooks</option>
          <option value="full">Full</option>
          <option value="paid-ebooks">Paid Ebooks</option>
          <option value="partial">Partial</option>
           </select>
         </label>

         
        </form>
    )
  }
}  

export default Filter;