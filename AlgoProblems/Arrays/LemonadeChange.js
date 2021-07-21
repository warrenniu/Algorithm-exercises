//===============================================================================
//At a lemonade stand, each lemonade costs $5. 
// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
// Note that you don't have any change in hand at first.
// Return true if and only if you can provide every customer with correct change.
//===============================================================================

//Constraints
// 0 <= bills.length <= 10000
// bills[i] will be either 5, 10, or 20.

//Steps
//1. Initialize a variable called change. Set it to 0
//2. Set up a for loop -> If current value is 5, increase change by 5. 10, increase change by 10. If it's 20, increaes change by 20
//3. If value is 10, check if change is 5 or greater. If so, decrease change by 5. if not, return false
//4. If value is 20, check if change is 15 or greater. If so, decrease change by 15. If not, return false
//5. Return true at end of function

function lemonadeChange(bills) {
    let change = {
        5: 0,
        10: 0,
        20: 0
    }

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            change[5] += 1
        }
        else if (bills[i] === 10) {
            change[10] += 1
            if (change[5] >= 1) {
                change[5] -= 1
            } else {
                return false
            }
        }
        else if (bills[i] === 20) {
            change[20] += 1
            if (change[5] >= 1 && change[10] >= 1) {
                change[5] -= 1
                change[10] -= 1
            } else if (change[5] > 2) {
                change[5] -= 3
            } else {
                return false
            }
        }
    }



    // for (let i = 0; i < bills.length; i++) {
    //     if (bills[i] === 5) {
    //         change += 5
    //         console.log("collected 5 dollars", change)
    //     }
    //     else if (bills[i] === 10) {
    //         if (change >= 5) {
    //             change -= 5
    //             console.log("gave 5 dollars", change)
    //         } else {
    //             return false
    //         }
    //         change += 10
    //         console.log(change)
    //     }
    //     else if (bills[i] === 20) {
    //         if (change >= 15) {
    //             change -= 15
    //             console.log("gave 15 dollars", change)
    //         } else {
    //             return false
    //         }
    //         change += 20
    //     }
    // }
    return true
}

console.log(lemonadeChange([5, 5, 10, 10, 20]))