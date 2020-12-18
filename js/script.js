let bushOfGrain = 50
let asterisks = ""
let rainPerInches = prompt("amount of rain in inches")
rainPerInches = parseInt(rainPerInches)
 if (rainPerInches >= 20) {
    bushOfGrain = bushOfGrain *= 0.9
 }
 else if (rainPerInches < 10) {
     bushOfGrain = bushOfGrain *= 0.8
 }
 for(i=0; i<=rainPerInches; i++) {
    asterisks += "*"
}
 console.log(asterisks)
 console.log(bushOfGrain)
 
 let fertilizer = prompt("did you use fertilizer?")
    if (fertilizer == "yes") {
 let fertilizerType = prompt("Was it premium or regular soil?")
            if (fertilizerType == "premium") {
               bushOfGrain = bushOfGrain *= 1.15
           }
           else if (fertilizerType == "regular") {
               bushOfGrain = bushOfGrain *=1.1
           } 
    }
    let yield = bushOfGrain

      console.log("your yield should be " +  yield + " bushels per achre")



 
 
 
 
 
 
 
 
 

