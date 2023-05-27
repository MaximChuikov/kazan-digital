import Point from "./models/Point";
import TypesPoint from "./models/TypesPoint";
import StatusPoint from "./models/StatusPoint";
import Evaluation from "./models/Evaluation";


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