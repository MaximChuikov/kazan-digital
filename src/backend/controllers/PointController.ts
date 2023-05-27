import Point from "../models/Point";
import PointRepository from "../repository/PointRepository";
class PointController {
    addPoint(point : Point) {
        return PointRepository.savePoint(point)
    }

    getAllPoint(){
        return PointRepository.getAll()
    }

    getPoint(coordinate : string) {
        return PointRepository.findPointByCoordinate(coordinate)
    }

    deletePoint(coordinate : string) {
        const point = PointRepository.findPointByCoordinate(coordinate)

        if(point.countVotesToDelete <= 5){
            return PointRepository.deleteByCoordinate(coordinate)
        }
        point.countVotesToDelete++
        PointRepository.savePoint(point)
    }
}

export default new PointController()