import Evaluation from "../models/Evaluation";
import EvaluationRepository from "../repository/EvaluationRepository";
import Point from "../models/Point";
import PointController from "./PointController";

class EvaluationController {
    addEvaluation( evaluation : Evaluation, point: Point) {
        point = PointController.getPoint(PointController.getCoordinate(point))

        if (!this.checkEvaluationUser(evaluation, point)) {
            point = EvaluationRepository.saveEvaluation(evaluation, point)
            return PointController.calculateRatingPoint(point)
        }
    }
    checkEvaluationUser(evaluation : Evaluation, point: Point) : Boolean {
        return !!point.evaluations.find(value => value.userId===evaluation.userId)
    }
}

export default new EvaluationController()