import React from 'react';
import '../../backend/index-backend'
import Point from "../../backend/models/Point";
import TypesPoint from "../../backend/models/TypesPoint";
import StatusPoint from "../../backend/models/StatusPoint";
import Evaluation from "../../backend/models/Evaluation";
const Backend = () => {
    let point : Point = {
        x : 5,
        y : 5,
        type : TypesPoint.Ramp,
        status : StatusPoint.Existence,
        description : "Описание",
        evaluations : new Array<Evaluation>(),
        numberVotesToCreate : 0,
        numberVotesToDelete : 0,
        createDate: new Date(2002,5,20)
    }
    console.log(point)
    return (
        <div>

        </div>
    );
};

export default Backend;