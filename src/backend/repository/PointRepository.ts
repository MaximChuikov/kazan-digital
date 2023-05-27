import Point from "../models/Point";
import StatusPoint from "../models/StatusPoint";

class PointRepository {


    savePoint(point : Point) : Point {
        let points : Map<string,Point> = JSON.parse(localStorage.getItem("points")|| "") as Map<string,Point>
        // @ts-ignore
        points[(`x${point.x.toString()}y${point.y.toString()}`)] = point
        /*points.set(point.x.toString()+point.y.toString(), point)*/
        localStorage.setItem("points",JSON.stringify(points) )
        return point
    }

    getAll() : Array<Point> {
        return JSON.parse(localStorage.getItem("points") || "")
    }

    findPointByCoordinate(coordinate:string) : Point {
        const points = JSON.parse(localStorage.getItem("points") || "")
        return points[coordinate]
    }

    deleteByCoordinate(coordinate:string) : Point {
        let points: Map<string,Point> = JSON.parse(localStorage.getItem("points")|| "") as Map<string,Point>
        // @ts-ignore
        points[coordinate].status = StatusPoint.Delete
        localStorage.setItem("points",JSON.stringify(points) )
        // @ts-ignore
        return points[coordinate]
    }

    constructor() {
        let map =  new Map<string,Point>()
        localStorage.setItem("points",JSON.stringify(map) )
    }
}
export default new PointRepository()

