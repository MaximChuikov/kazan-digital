import Evaluation from "../models/Evaluation";
import EvaluationRepository from "../repository/EvaluationRepository";
import Point from "../models/Point";
import PointController from "./PointController";
import Vote from "../models/Vote";
import TypesVote from "../models/TypesVote";

class EvaluationController {
    addEvaluation( evaluation : Evaluation, point: Point) {
        point = PointController.getPoint(PointController.getCoordinate(point))

        if (!this.checkEvaluationUser(evaluation, point)) {
            point = EvaluationRepository.saveEvaluation(evaluation, point)

            let typeVote : TypesVote // начало кастыля
            if(evaluation.score === 0){
                typeVote = TypesVote.Removal
            }
            else{
                typeVote = TypesVote.Creation
            }

            const vote : Vote = {
                userId : evaluation.userId,
                typeVote : typeVote
            }
            point  = PointController.addVote(vote, point) // конец кастыля

            return PointController.calculateRatingPoint(point)
        }
    }
    checkEvaluationUser(evaluation : Evaluation, point: Point) : Boolean {
        return !!point.evaluations.find(value => value.userId===evaluation.userId)
    }
}

export default new EvaluationController()