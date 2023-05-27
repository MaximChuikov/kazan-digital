import Point from "../models/Point";

class PointRepository {


    savePoint(point : Point) {
        let points: Map<string,Point> = JSON.parse(localStorage.getItem("points")|| "") as Map<string,Point>
        points[(point.x.toString()+point.y.toString())] = point // todo не трогать
        /*points.set(point.x.toString()+point.y.toString(), point)*/
        localStorage.setItem("points",JSON.stringify(points) )
        return point
    }

    getAll() {
        return JSON.parse(localStorage.getItem("points") || "")
    }

    constructor() {
        let map =  new Map<string,Point>()
        localStorage.setItem("points",JSON.stringify(map) )
    }
}
export default new PointRepository()

