import Point from "./models/Point";
import TypesPoint from "./models/TypesPoint";
import StatusPoint from "./models/StatusPoint";
import Evaluation from "./models/Evaluation";
import PointController from "./controllers/PointController";
import EvaluationController from "./controllers/EvaluationController";

let point1 : Point = {
    x : 5,
    y : 5,
    type : TypesPoint.Ramp,
    status : StatusPoint.Active,
    description : "Описание",
    evaluations : new Array<Evaluation>(),
    countVotesToCreate : 0,
    countVotesToDelete : 0,
    createDate: new Date(2002,5,20)
}
let point2 : Point = {
    x : 6,
    y : 6,
    type : TypesPoint.Ramp,
    status : StatusPoint.Active,
    description : "Описание",
    evaluations : new Array<Evaluation>(),
    countVotesToCreate : 0,
    countVotesToDelete : 0,
    createDate: new Date(2002,5,20)
}
let evaluation1 : Evaluation  ={
    userId : "user",
    score : 2,
    createDate: new Date()
}
let evaluation2 : Evaluation  ={
    userId : "user",
    score : 1,
    createDate: new Date()
}
PointController.addPoint(point1)
PointController.addPoint(point2)
EvaluationController.addEvaluation(evaluation1,point2)
EvaluationController.addEvaluation(evaluation2,point2)
console.log(point2)
console.log(PointController.getAllPoint())