import React, {useState, useEffect} from  'react'
import axios from 'axios';
// import 'src/Components/styles.css'

const Assessment = () => {
    const [profiles, setProfile] = useState([])
   
  useEffect(() => {
    const fetchData = async () => {
      const { data:{records:{profiles} } } = await axios(
        'https://api.enye.tech/v1/challenge/records',
      );
      setProfile(profiles);
      console.log(profiles);
    };

    
    fetchData();
  }, []);

    return(
        <div className="assessment">


        {profiles?.map(item => (
            <div style={{display:"flex", paddingRight: "30px"}}>
            <p style={{fontSize:"40px"}}> {item.FirstName}  </p>
            <p style={{fontSize:"40px"}}> {item.LastName}  </p>
            </div>
        ))}
        

        </div>
        
    )
}
export default Assessment