import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTomtomLocation } from '../Redux/Actions/LocationActions';
import { getSingleTomtomLocation } from '../Redux/Actions/LocationActions';







export const SearchBox = (props)=>{

    const dispatch = useDispatch();

    const [dataSource, setDataSource] = useState(props.data);
    const [userQuery, setUserQuery] = useState('');
    const [placeHolder, setPlaceHolder] = useState('Search...');
    const [pointOfInterest, setPointOfInterest] = useState({});


    return(
        <div style={{padding:5, textAlign:'center'}}>

            {/* input box */}
            <input placeholder={placeHolder} value={userQuery} style={{width:'99%', borderStyle:'solid', borderWidth:.5, borderColor:'lightgrey', borderRadius:5, height:50, fontSize:16}} 
            onChange={(event)=>{

                        //on change set user query
                        setUserQuery(event.target.value);
           
                        //dispatch the tomtom location
                        dispatch(getTomtomLocation(userQuery,props.location.latitude, props.location.longitude,13,1000)).then(dataArr=>setDataSource(dataArr));
                    }}

            />



            {/* suggestion menu */}
            <div style={{width:'80%', padding:5, position:'absolute', backgroundColor:'white',}}>
                {dataSource.map((item,index)=>{
                    return(
                    <div key={index} 
                    onClick={()=>{
                        //on click set the query with the new value, set the single object of point of interest, then wipe out the data source
                        setUserQuery(item.value);
                        dispatch(getSingleTomtomLocation(item.key)).then(jsonResponse=>setPointOfInterest(jsonResponse.results[0]));
                        setDataSource([]);
                    }} 
                    
                    style={{padding:10, borderStyle:'solid', borderLeftWidth:1, borderRightWidth:1, borderBottomWidth:1, borderTopWidth:1, borderColor:'lightgrey', height:25, textAlign:'left'}}>
                        {item.value}
                    </div>
                    )
                })}
            </div>


            {/* details about the point of interest */}
            <div style={{display:Object.keys(pointOfInterest).length>0?'flex':'none', padding:20, flexDirection:'column', marginTop:20}} >
                    <h3>
                        {Object.keys(pointOfInterest).length>0?pointOfInterest.poi.name:""}
                    </h3>
                    <p>
                        {Object.keys(pointOfInterest).length>0?pointOfInterest.poi.phone:""}
                    </p>
                    <p>
                        {Object.keys(pointOfInterest).length>0?pointOfInterest.poi.url:""}
                    </p>
                    <p>
                        {Object.keys(pointOfInterest).length>0?pointOfInterest.address.freeformAddress:""}
                    </p>
            </div>

        
        </div>
    )
}