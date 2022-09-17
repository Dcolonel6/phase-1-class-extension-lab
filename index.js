// Your code here
class Polygon{
    constructor(list){
        if(!Array.isArray(list)){
            throw Error(`${list} is not an array`)
        }
        this.dimensions = list

    }
    get countSides(){
        return this.dimensions.length
    }
    get perimeter(){
        return this.dimensions.reduce((acc,currentVal) => acc + currentVal,0)
    }

}

class Triangle extends Polygon{
    get isValid(){
        const [height,base,hypotenuse] = this.dimensions
        return height + base > hypotenuse && height + hypotenuse > base && base + hypotenuse > height
    }
}

class Square extends Polygon{
    get isValid(){
        const [s1,s2,s3,s4] = this.dimensions
        return s1 === s2  && s1 === s3 && s1 === s4
    }
    get area(){
        return this.dimensions[0] * this.dimensions[2]
    }
}