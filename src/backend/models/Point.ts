import StatusPoint from "./StatusPoint";
import Evaluation from "./Evaluation";
import TypesPoint from "./TypesPoint";
import Vote from "./Vote";

export default interface Point {
    x : number
    y : number
    type : TypesPoint
    status : StatusPoint
    description? : string
    evaluations : Array<Evaluation>
    votes : Array<Vote>
    rating?  : number
    countVotesToCreate? : number
    countVotesToDelete? : number
    createDate: Date
}