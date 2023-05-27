import Point from "../models/Point";
import PointRepository from "../repository/PointRepository";
class PointController {
    addPoint(point : Point) {
        return PointRepository.savePoint(point)
    }

    getAllPoint(){
        return PointRepository.getAll()
    }

    deletePoint(coordinate : string) {

    }

    async changeStatusPoint() {

    }
}
export default new PointController()