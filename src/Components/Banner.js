

import React from 'react';

export const Banner = (props)=>{



    if(props.userLocation){
        return(
            <div style={{display:'flex', flexDirection:'row', backgroundColor:'green', justifyContent:'center'}}>
                <p style={{fontSize:9}}>lat {props.userLocation.latitude}</p>
                <p style={{fontSize:9}}>long {props.userLocation.longitude}</p>
            </div>
        )
    }
    else{
        return null;
    }
}