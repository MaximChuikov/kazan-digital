import TypesPoint from "./TypesPoint";
import StatusPoint from "./StatusPoint";
import Evaluation from "./Evaluation";

export default interface Point {
    x : number
    y : number
    type : TypesPoint
    status : StatusPoint
    description? : string
    evaluations : Array<Evaluation>
    numberVotesToCreate? : number
    numberVotesToDelete? : number
    createDate: Date


}