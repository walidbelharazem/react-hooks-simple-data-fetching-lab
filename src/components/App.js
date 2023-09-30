// create your App component here
import React from 'react'
import { useEffect,useState } from 'react'

const App = () => {
    const [dog,Setdog] = useState([]);
    const [isLoading,SetIsLoading] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {Setdog(data.message);
            SetIsLoading(true);
           
          });
          
    }, [])

    if (!isLoading) {return ( <p>Loading...</p>)
}else{return (
        <img src = {dog} alt='A Random Dog'/>
        );}


}

export default App