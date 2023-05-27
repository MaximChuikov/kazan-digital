const folder = '/images/icons/'
interface TypesPoint {
    title: string,
    urlToImg: string,
    rgb: string,

}

enum TypesPointList {
    Ramp = 0,
    Elevator = 1,
    TrafficLightSignal = 2,
    Toilet=3,
    ComfortableBusStation,
    UnComfortableBusStation,
    Obstacle

}

export default TypesPointList