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

    addVote( vote : Vote,point: Point)  : Point {
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

            if(point.status === StatusPoint.Active && point.countVotesToDelete!! > 0){ //Дубляж
                point.status = StatusPoint.NotActive
            }
            if(point.status === StatusPoint.NotActive && point.countVotesToDelete!! >= 10){ //Дубляж
                point.status = StatusPoint.Delete
            }

            return PointRepository.savePoint(point)
        }
        return point
    }

    getAllUserPoint() : Array<Point> {
        console.log(PointRepository.getAllUserPoint())
        console.log(PointRepository.getAllUserPoint().length)
        return PointRepository.getAllUserPoint()
    }

    checkVoteUser(vote : Vote, point: Point) : Boolean {
        return !!point.votes.find(value => value.userId===vote.userId)
    }

    /*constructor() {

        const typeMap = new Map<string,number>([
            ["Ramp",0],
            ["Elevator", 1],
            ["TrafficLightSignal", 2],
            ["Toilet", 3],
            ["ComfortableBusStation", 4],
            ["Obstacle", 5]
        ])
        for (let i of data){
            let point :  Point = {
                x: i.x,
                y: i.y,
                // @ts-ignore
                type : typeMap[i.type],
                status : 1,
                description : i.description,
                evaluations : i.evaluations,
                votes : i.votes,
                rating  : 0,
                countVotesToCreate : 0,
                countVotesToDelete : 0,
                createDate: new Date()
            }
            this.addPoint(point)
        }

    }*/

}

export default new PointController()