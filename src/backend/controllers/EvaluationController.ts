import Evaluation from "../models/Evaluation";
import EvaluationRepository from "../repository/EvaluationRepository";
import Point from "../models/Point";
import PointController from "./PointController";

class EvaluationController {
    addEvaluation( evaluation : Evaluation, point: Point) : Point {

       // if(checkCreateUser()){
        point = EvaluationRepository.saveEvaluation(evaluation, point)
        return  PointController.calculateRating(point)
        }


   // checkCreateUser() : Boolean {
     //   return false;
    //}

}

export default new EvaluationController()