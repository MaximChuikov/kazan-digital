import Point from "../models/Point";
import Vote from "../models/Vote";

class VoteRepository {
    saveVote(vote : Vote, point : Point){
        let points: Map<string,Point> = JSON.parse(localStorage.getItem("points")|| "") as Map<string,Point>
        // @ts-ignore
        points[(`x${point.x.toString()}y${point.y.toString()}`)].votes.push(vote)
        localStorage.setItem("points",JSON.stringify(points) )
        // @ts-ignore
        return points[(`x${point.x.toString()}y${point.y.toString()}`)]
    }
}

export default new VoteRepository()