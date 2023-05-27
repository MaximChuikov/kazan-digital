import TypesPoint from "../models/TypesPoint";

export function convertToUrl(icon: TypesPoint) {
    const folder = '/images/icons/'
    switch (icon) {
        case TypesPoint.Ramp:
            return folder + 'pandus.png'
        case TypesPoint.Toilet:
            return folder + 'toilet.png'
        case TypesPoint.Obstacle:
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
        case TypesPoint.Obstacle:
            return 'Препятствие'
        case TypesPoint.TrafficLightSignal:
            return 'Светофоры со звуком'
        case TypesPoint.UnComfortableBusStation:
            return 'Необорудованная автобусная остановка'
        default:
            return null
    }
}