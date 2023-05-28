import TypesPoint from "../models/TypesPoint";

export function convertToUrl(icon: TypesPoint) {
    const folder = '/images/icons/'
    switch (icon) {
        case TypesPoint.Ramp:
            return folder + 'pandus.png'
        case TypesPoint.Toilet:
            return folder + 'toilet.png'
        case TypesPoint.ProblemPlace:
            return folder + 'barier.png'
        case TypesPoint.TrafficLightSignal:
            return folder + 'lights.png'
        case TypesPoint.Elevator:
            return folder + 'lift.png'
        default:
            return folder + 'gigachad.png'
    }
}
export function convertToTooltipDescription(icon: TypesPoint) {
    switch (icon) {
        case TypesPoint.Ramp:
            return 'Пандус'
        case TypesPoint.Toilet:
            return 'Туалет'
        case TypesPoint.ComfortableBusStation:
            return 'Комфортная автобусная остановка'
        case TypesPoint.Elevator:
            return 'Лифт'
        case TypesPoint.ProblemPlace:
            return 'Препятствие'
        case TypesPoint.TrafficLightSignal:
            return 'Светофоры со звуком'
        default:
            return null
    }
}
export function convertToRGB(icon: TypesPoint){
    switch (icon) {
        case TypesPoint.Ramp:
            return  "#9575CD"
        case TypesPoint.Toilet:
            return "#4FC3F7"
        case TypesPoint.ComfortableBusStation:
            return "#4DB6AC"
        case TypesPoint.Elevator:
            return "#81C784"
        case TypesPoint.TrafficLightSignal:
            return "#FFD54F"
        case TypesPoint.ProblemPlace:
            return "#D32F2F"
        default:
            return "#FFFFFF"
    }
}

export function convertToOpacity(rating : number ) {
    if(rating < 1){
        return "low"
    }
    else if(rating < 2){
        return "middle"
    }
    else {
        return "fill"
    }
}
