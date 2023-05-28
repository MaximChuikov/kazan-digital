import Point from "../models/Point";
import PointRepository from "../repository/PointRepository";
import Vote from "../models/Vote";
import VoteRepository from "../repository/VoteRepository";
import TypesVote from "../models/TypesVote";
import StatusPoint from "../models/StatusPoint";

class PointController {
    addPoint(point : Point) {
        return PointRepository.savePoint(point)
    }

    getAllPoint() : Array<Point> {
        return PointRepository.getAll()
    }

    getPoint(coordinate : string) {
        return PointRepository.findPointByCoordinate(coordinate)
    }

    deletePoint(coordinate : string) {
        const point = PointRepository.findPointByCoordinate(coordinate)

        if(point.status === StatusPoint.Active && point.countVotesToDelete!! > 0){ //todo если то пометить её
            point.status = StatusPoint.NotActive
        }

        if(point.countVotesToDelete!! >= 10){
            return PointRepository.deleteByCoordinate(coordinate)
        }

        point.countVotesToDelete!!++
        PointRepository.savePoint(point)
    }

    calculateRatingPoint(point : Point) : Point {
        point.rating =  point.evaluations.map(e => e.score).reduce((pV, cur) => pV + cur) / point.evaluations.length
        return  PointRepository.savePoint(point)
    }

    calculateRatingArea(points : Array<Point>) : number {
        return points.map(e => e.rating).reduce((pV, cur) => pV + cur) / points.length
    }

    getCoordinate(point : Point) : string{
        return `x${point.x.toString()}y${point.y.toString()}`
    }

    addVote( vote : Vote,point: Point){
        point = this.getPoint(this.getCoordinate(point))

        if (!this.checkVoteUser(vote, point)) {
            point = VoteRepository.saveVote(vote, point)
            if(vote.typeVote === TypesVote.Creation) {
                point.countVotesToCreate!!++
            }
            else {
                point.countVotesToDelete!!++
            }

            if(point.status === StatusPoint.Creat && point.countVotesToCreate!! >= 5)
                point.status = StatusPoint.Active

            PointRepository.savePoint(point)
        }
    }

    getAllUserPoint() : Array<Point> {
        return PointRepository.getAllUserPoint()
    }

    checkVoteUser(vote : Vote, point: Point) : Boolean {
        return !!point.votes.find(value => value.userId===vote.userId)
    }


}

export default new PointController()