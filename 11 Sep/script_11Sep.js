// Ex.1
// var id = 201409023
// var id = "S2409AD023"
// function TrackRecord(id:number|string){
//     if(typeof id == "string"){
//         id = id.toUpperCase()
//         console.log(`id:${id} is get Recorded`);
//     }
//     else{
//         console.log(`id:${id} is get Recorded`)
//     }
// }
// TrackRecord("S02309AD023")
// ----------------------------------------------------------
// Ex.2
// str = "Orange"
// str = ["Red","Blue","Yellow","Green"]
function PrintColor(color) {
    if (Array.isArray(color)) {
        console.log(color.join(', '));
        // color.forEach((item) => {
        //   console.log(item);
        // });
    }
    else {
        console.log("Your Given color is ".concat(color));
    }
}
PrintColor("Orange");
PrintColor(["Red", "Blue", "Yellow", "Green"]);
