


//class that will hold the methods to find a
export class PlaceFinder{


    constructor(){
        this.tomtomApiKey="YOUR_APIKEY";
    }
    
    //method that performs a fetch query to tomtom's api, along with query parameters
    //method that will take a users query, and the lat and long, then limit the search down to a specific readius and 5 results. 
    //the search api returns details about the POI, like name website, phone number address
     async findNearbyPlaces(userQuery, lat, long, limit=5, radius=500){
        
        let resultsArr=[];

        //if user query is not empty, run the api call
        if(userQuery.length>0 && userQuery!=""){
            let baseUrl = 'https://api.tomtom.com/search/2/poiSearch';
            let queryString = `limit=${limit}&lat=${lat}&lon=${long}&radius=${radius}&key=${this.tomtomApiKey}`; //query parameters
            let response = await fetch(`${baseUrl}/${userQuery}.json?${queryString}`);
            let jsonResultsData = await response.json();
            

            //if results array has results, initialize it
            if(jsonResultsData.results.length>0){
                console.log(jsonResultsData);
                resultsArr = jsonResultsData.results;
            }
            
        }
        
        

    

        const dataArr = [];

        //if there's something in the results array, create and push a key value object into the data arr
        if(resultsArr.length>0){
            resultsArr.map(item=>{ 
                dataArr.push({
                    key:item.id,
                    value:item.address.freeformAddress
                })
            });
        }

        

        return dataArr;
        
    }


    //method that will fetch the query data and
}