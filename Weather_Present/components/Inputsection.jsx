import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({onSearch})=>{

  const [todoName, setTodoName] = useState("");

  const onNameChange = (event)=>{
    setTodoName(event.target.value);
  };

  const handleButtonClicked = ()=>{
    onSearch(todoName);
    setTodoName("");

  };


  return (<div className="search">
    <input type="text" onChange={onNameChange} value={todoName} placeholder="Search City" spellCheck="false"/>
    <button onClick={handleButtonClicked}><FaSearch /></button>
</div>);
};

export default SearchBar;
