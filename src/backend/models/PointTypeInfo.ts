export default class PointTypeInfo {
    public title : string
    public url: string
    public rgb: string
    public opacity : number

    constructor(title : string, url : string, rgb: string, opacity: number) {
    this.title = title
        this.url = url
        this.rgb = rgb
        this.opacity = opacity
    }
}