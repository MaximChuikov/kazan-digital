import Point from "../models/Point";
import PointRepository from "../repository/PointRepository";
import Vote from "../models/Vote";
import VoteRepository from "../repository/VoteRepository";
import TypesVote from "../models/TypesVote";

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

        if(point.countVotesToDelete!! >= 5){
            return PointRepository.deleteByCoordinate(coordinate)
        }
        point.countVotesToDelete!!++
        PointRepository.savePoint(point)
    }

    calculateRating(point : Point) : Point {
        console.log(point)
        console.log(point.evaluations)
        point.rating =  point.evaluations.map(e => e.score).reduce((pV, cur) => pV + cur) / point.evaluations.length
        return  PointRepository.savePoint(point)
    }

    getCoordinate(point : Point) : string{
        return `x${point.x.toString()}y${point.y.toString()}`
    }

    addVote( vote : Vote,point: Point){
        point = this.getPoint(this.getCoordinate(point))

        if (!this.checkVoteUser(vote, point)) {
            point = VoteRepository.saveVote(vote, point)
            if(vote.typeVote == TypesVote.Creation) {
                point.countVotesToCreate!!++
            }
            else {
                point.countVotesToDelete!!++
            }
            PointRepository.savePoint(point)
        }
    }

    checkVoteUser(vote : Vote, point: Point) : Boolean {
        return !!point.votes.find(value => value.userId===vote.userId)
    }
}

export default new PointController()