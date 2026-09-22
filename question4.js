class Emp{
    constructor(id,name,sal){
        this.id=id
        this.name=name
        this.sal=sal
    }
    calsal(){
        return this.sal
    }
}
class Mag extends Emp{
    constructor(id, name, sal, inc){
        super(id,name,sal)
        this.inc=inc;
    }
    calsal(){
        return this.sal + this.inc
    }

}

let s= new Emp(2, "ud",200)
let s2=new Mag(3,"ram",2000,3000)

console.log(s.calsal())
console.log(s2.calsal())