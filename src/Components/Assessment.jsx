import React, {useState, useEffect} from  'react'
import axios from 'axios';
import Search from "./Search/Search";
import { CardList } from './Card-list/CardList';
import "../App.css";






const Assessment = () => {
    const [profiles, setProfiles] = useState([]);
    const [searchField, setSearchField] = useState("");
   
  useEffect(() => {
    const fetchData = async () => {
      const { data:{records:{profiles} } } = await axios(
        'https://api.enye.tech/v1/challenge/records',
      );
      setProfiles(profiles);
      console.log(profiles);
    };

    
    fetchData();
  }, []);
 
  
  useEffect(() => {
         
  })
    const handleChange = (e) => {
      //  console.log(e.target.value);
       setSearchField(e.target.value);
       console.log(searchField)
       
    };
    const filtered = profiles.filter(profile => 
      profile.FirstName.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return(
      
        <div className="assessment">
         
          <h1>Profiles</h1>
     
          
          <Search onChange={handleChange} placeholder="search for aliens"/>
     
           <CardList persons = {filtered} />
       
        

        </div>
        
    )
}
export default Assessment