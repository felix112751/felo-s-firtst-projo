function speedDetector(speed)
 {
    const speedLimit = 70;
    const demeritPointsPerUnit = 5;
    const pointsThreshold = 12;

    if (speed <= speedLimit) {
        return "Ok";
    } 
    
    else {
        let excessSpeed = speed - speedLimit ;
        let demeritPoints = Math.floor(excessSpeed);

        if (demeritPoints > pointsThreshold) {
            return `Points: ${demeritPoints}. License suspended.`;
        } else {
            return `Points: ${demeritPoints}`;
        }
    }}

    function speedDetectorProgram() {
        
        let speed = parseFloat(prompt("Enter the speed of the car in km/h:"));
    
        
        if (!isNaN(speed) && speed >= 0) {
            
            let result = speedDetector(speed);

            console.log(result);
        } else {
            
            console.log("Invalid input. Speed must be a positive number.");
        }
    }