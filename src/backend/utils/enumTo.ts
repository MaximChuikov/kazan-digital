import TypesPoint from "../models/TypesPoint";

export function convertToUrl(icon: TypesPoint) {
    switch (icon) {
        case TypesPoint.Ramp:
            return '/images/gigachad.png'
        default:
            return '/images/gigachad.png'
    }
}
export default function convertToTooltipDescription(icon: TypesPoint) {
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
            return ''
    }
}