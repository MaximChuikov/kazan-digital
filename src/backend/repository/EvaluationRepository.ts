import Evaluation from "../models/Evaluation";
import Point from "../models/Point";

class EvaluationRepository {
    saveEvaluation(evaluation : Evaluation, point : Point) {
        let points: Map<string,Point> = JSON.parse(localStorage.getItem("points")|| "") as Map<string,Point>
        // @ts-ignore
        points[(`x${point.x.toString()}y${point.y.toString()}`)].evaluations.push(evaluation)
        localStorage.setItem("points",JSON.stringify(points) )
        // @ts-ignore
        return points[(`x${point.x.toString()}y${point.y.toString()}`)]
    }
}
export default new EvaluationRepository()