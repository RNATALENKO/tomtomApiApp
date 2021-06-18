export const GET_TOMTOM_LOCATION = "GET_TOMTOM_LOCATION";


export const getTomtomLocation = (userQuery, lat, long, limit=5, radius=500)=>{

    return async (dispatch)=>{

       
        const tomtomApiKey="YOUR_APIKEY"
        
        //if user query is not empty, run the api call
        let resultsArr=[];
        if(userQuery.length>0 && userQuery!=""){
            let baseUrl = 'https://api.tomtom.com/search/2/poiSearch';
            let queryString = `limit=${limit}&lat=${lat}&lon=${long}&radius=${radius}&key=${tomtomApiKey}`; //query parameters
            let response = await fetch(`${baseUrl}/${userQuery}.json?${queryString}`);
            let jsonResultsData = await response.json();
            

            //if results array has results, initialize it
            if(jsonResultsData.results.length>0){
                resultsArr = jsonResultsData.results;
            }
            
        }



        //if there's something in the results array, create and push a key value object into the data arr
        const dataArr = [];
        if(resultsArr.length>0){
            resultsArr.map(item=>{ 
                dataArr.push({
                    key:item.id,
                    value:item.poi.name
                })
            });
        }

        return dataArr; 
        


    }
}



export const getSingleTomtomLocation = (locationId)=>{
    return async (dispatch)=>{

        const tomtomApiKey="YOUR_APIKEY"

        let baseUrl = 'https://api.tomtom.com/search/2/place.json?';
        let queryParams = `&entityId=${locationId}&key=${tomtomApiKey}`;
        let response = await fetch(`${baseUrl}${queryParams}`);
        let jsonResponse = await response.json();

        return jsonResponse; 
 
    }
}