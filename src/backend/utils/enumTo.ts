import TypesPointList from "../models/TypesPointList";
import Point from "../models/Point";

export function convertToUrl(icon: TypesPointList) {
    const folder = '/images/icons/'
    switch (icon) {
        case TypesPointList.Ramp:
            return folder + 'pandus.png'
        case TypesPointList.Toilet:
            return folder + 'toilet.png'
        case TypesPointList.Obstacle:
            return folder + 'barier.png'
        case TypesPointList.TrafficLightSignal:
            return folder + 'lights.png'
        case TypesPointList.Elevator:
            return folder + 'lift.png'
        default:
            return folder + 'gigachad.png'
    }
}
export function convertToTooltipDescription(icon: TypesPointList) {
    switch (icon) {
        case TypesPointList.Ramp:
            return 'Пандус'
        case TypesPointList.Toilet:
            return 'Туалет'
        case TypesPointList.ComfortableBusStation:
            return 'Комфортная автобусная остановка'
        case TypesPointList.Elevator:
            return 'Лифт'
        case TypesPointList.Obstacle:
            return 'Препятствие'
        case TypesPointList.TrafficLightSignal:
            return 'Светофоры со звуком'
        case TypesPointList.UnComfortableBusStation:
            return 'Необорудованная автобусная остановка'
        default:
            return null
    }
}

/*
export function convertToColor(point : Point)
{//1E270E
    switch ()
}*/
