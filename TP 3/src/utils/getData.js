const API = 'https://api.spacexdata.com/v5/launches';

const getData = async (id = null) => {
    const apiURL = API;

    try {
        const response = await fetch(apiURL);  
        const data = await response.json();   
        
        if (id) {
          
            const result = data.find(item => item.id === id);

            if (result) {
                console.log(result);   
                return result;         
            } else {
                console.log(`No se encontró un elemento con el id: ${id}`);
                return null;        
            }
        } else {
 
            console.log(data);        
            return data;               
        }

    } catch(error) {
        console.log('Fetch Error..!!', error);  
        return null; 
    }
    
};

export default getData;
