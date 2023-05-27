import StatusPoint from "./StatusPoint";
import Evaluation from "./Evaluation";
import TypesPoint from "./TypesPoint";

export default interface Point {
    x : number
    y : number
    type : TypesPoint
    status : StatusPoint
    description? : string
    evaluations : Array<Evaluation>
    rating?  : 0
    countVotesToCreate? : 0
    countVotesToDelete? : 0
    createDate: Date
}