export default class Calculator{
    add(a:number,b:number){
        return a+b;
    }
    sub(a:number,b:number){
        return a-b;
    }
    multi(a:number,b:number){
        return a*b;
    }
}
// class wise export


// obj wise export:
// export let obj = new Calculator();
// export default new Calculator();

