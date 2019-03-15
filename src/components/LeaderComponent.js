import React from 'react';

import { Media } from 'reactstrap';

function Leader  ({leader}){

    return(
        <Media key={leader.id} className="mb-5">
                <Media left  href="#" className="p-3">
                     <Media object className="m-2" src={leader.image} alt={leader.name} />
                 </Media>
                 <Media body>
                 <Media heading>
                 {leader.name} <br/>
                 <small>{leader.designation} </small>
                 </Media>
                 {leader.description}
                </Media>
             </Media>
    );

}

export default Leader;