function findOurWater(water) {
    var familyWaterTotal = 0;
    var holdTheMinWidth = 0;
    var holdTheMaxWidth = 0;
    var totalWater = 0;
    var holdingWater = water;

    function findingTheValues(holdingWater) {
        for (var i = 0; i < holdingWater.length; i++) {
            var numberOfFamily = holdingWater[i];
            if (numberOfFamily === 8) {
                familyWaterTotal = 400;
            }
            if (numberOfFamily === 7) {
                familyWaterTotal = 350;
            }
            if (numberOfFamily === 6) {
                familyWaterTotal = 300;
            }
            if (numberOfFamily === 5) {
                familyWaterTotal = 250;
            }
            if (numberOfFamily === 4) {
                familyWaterTotal = 200;
            }
            if (numberOfFamily === 3) {
                familyWaterTotal = 150;
            }
            if (numberOfFamily === 2) {
                familyWaterTotal = 100;
            }
            if (numberOfFamily === 1) {
                familyWaterTotal = 50;
            }
        }
        return familyWaterTotal;
    
    }

    function minWidth(morning) {
holdTheMinWidth = morning;
return holdTheMinWidth;
    }
    function maxWidth(afternoon){
holdTheMaxWidth = afternoon;
return holdTheMaxWidth;
    }
function finalProduct(){
     var maxSubMin = holdTheMaxWidth - holdTheMinWidth;
     totalWater = familyWaterTotal - maxSubMin;
     return totalWater; 
}

    return {
        findingTheValues,
        minWidth,
        maxWidth,
        finalProduct

    }

}