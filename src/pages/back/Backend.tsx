import React from 'react';
import '../../backend/index-backend'
import Point from "../../backend/models/Point";
import TypesPoint from "../../backend/models/TypesPoint";
import StatusPoint from "../../backend/models/StatusPoint";
import Evaluation from "../../backend/models/Evaluation";
import PointController from "../../backend/controllers/PointController";
const Backend = () => {
    let point1: Point = {
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
    let point2 : Point = {
        x : 6,
        y : 6,
        type : TypesPoint.Ramp,
        status : StatusPoint.Existence,
        description : "Описание",
        evaluations : new Array<Evaluation>(),
        numberVotesToCreate : 0,
        numberVotesToDelete : 0,
        createDate: new Date(2002,5,20)
    }

    PointController.addPoint(point1)
    PointController.addPoint(point2)
    console.log(point1)
    console.log(point2)
    console.log(PointController.getAllPoint())
    return (
        <div>

        </div>
    );
};

export default Backend;