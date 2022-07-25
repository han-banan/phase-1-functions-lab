// Code your solution in this file!
const hq = 42
const blockFt = 264
const fare = blockFt*.02
function distanceFromHqInBlocks(blockNum){
    if (blockNum > hq){
        return (blockNum - hq)
    } 
    if (blockNum < hq) {
        return (hq  - blockNum)
    }
}
function distanceFromHqInFeet(block){
    if (block > hq){
        return ((block - hq)*blockFt)
    }
    if (block < hq){
        return ((hq - block)*blockFt)
    }
}
function distanceTravelledInFeet(blockOne,blockTwo){
    if (blockOne > blockTwo){
        return ((blockOne-blockTwo)*blockFt)
    }
    if (blockOne < blockTwo){
        return ((blockTwo-blockOne)*blockFt)
    }
}
function calculatesFarePrice(start,stop){
    if (start > stop){
        if((start-stop)*blockFt <= 400){
            return (0)
        } else if ((start-stop)*blockFt-400<=2000){
            return ((start-stop)*blockft*fare)
        } else if ((start-stop)*blockFt > 2000 && (start-stop)*blockFt < 2500){
            return (25)
        } else if ((start-stop)*blockFt >= 2500){
            return ('cannot travel that far')
        }
    }
    else if (start < stop){
        if ((stop-start)*blockFt <=400){
            return (0)
        } else if ((stop-start)*blockFt-400<=2000){
            return((stop-start)*blockFt*fare)
        } else if ((stop-start)*blockFt > 2000 && (stop-start)*blockFt < 2500){
            return (25)
        } else if ((stop-start)*blockFt >= 2500){
            return ('cannot travel that far')
        }
    }
}