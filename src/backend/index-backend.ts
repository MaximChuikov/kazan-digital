import Point from "./models/Point";
import TypesPoint from "./models/TypesPoint";
import StatusPoint from "./models/StatusPoint";
import Evaluation from "./models/Evaluation";
import PointController from "./controllers/PointController";
import EvaluationController from "./controllers/EvaluationController";
import Vote from "./models/Vote";
import TypesVote from "./models/TypesVote";
import {data} from "./data";

/*const typeMap = new Map<string,number>([
    ["Ramp",0],
    ["Elevator", 1],
    ["TrafficLightSignal", 2],
    ["Toilet", 3],
    ["ComfortableBusStation", 4],
    ["Obstacle", 5]
])*/
for (let i of data){

    let point :  Point = {
        x: i.x,
        y: i.y,
        type : i.type as TypesPoint ,
        status : 1,
        description : i.description,
        // @ts-ignore
        evaluations : i.evaluations,
        votes : i.votes,
        rating  : 0,
        countVotesToCreate : 0,
        countVotesToDelete : 0,
        createDate: new Date()
    }
    console.log()
    PointController.addPoint(point)
}

let point1 : Point = {
    x : 5,
    y : 5,
    type : TypesPoint.Ramp,
    status : StatusPoint.Active,
    description : "Описание",
    evaluations : new Array<Evaluation>(),
    votes : new Array<Vote>(),
    rating : 0,
    countVotesToCreate : 0,
    countVotesToDelete : 0,
    createDate: new Date(2002,5,20)
}
let point2 : Point = {
    x : 6,
    y : 6,
    type : TypesPoint.Ramp,
    status : StatusPoint.Creat,
    description : "Описание",
    rating : 5,
    evaluations : new Array<Evaluation>(),
    votes : new Array<Vote>(),
    countVotesToCreate : 4,
    countVotesToDelete : 9,
    createDate: new Date(2002,5,20)
}
let point3 : Point = {
    x : 55,
    y : 55,
    type : TypesPoint.Ramp,
    status : StatusPoint.Active,
    description : "Описание",
    rating : 5,
    evaluations : new Array<Evaluation>(),
    votes : new Array<Vote>(),
    countVotesToCreate : 4,
    countVotesToDelete : 10,
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
let vote1 : Vote  ={
    userId : "user",
    typeVote : TypesVote.Removal
}
let vote2 : Vote  ={
    userId : "user",
    typeVote : TypesVote.Removal
}
let vote3 : Vote  ={
    userId : "user1",
    typeVote : TypesVote.Removal
}
let vote4 : Vote  ={
    userId : "user2",
    typeVote : TypesVote.Removal
}
PointController.addPoint(point1)
PointController.addPoint(point3)
PointController.addPoint(point2)
PointController.addVote(vote1,point2)
PointController.addVote(vote2,point2)
PointController.addVote(vote3,point2)
PointController.addVote(vote4,point2)
EvaluationController.addEvaluation(evaluation1,point2)
EvaluationController.addEvaluation(evaluation2,point2)

console.log(PointController.getAllPoint())
PointController.deletePoint(PointController.getCoordinate(point2))
console.log(point2)
console.log(PointController.getAllPoint())

console.log(PointController.getPoint(PointController.getCoordinate(point2)))
console.log(PointController.getAllUserPoint())
