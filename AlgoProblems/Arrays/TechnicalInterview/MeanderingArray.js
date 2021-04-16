function meanderingArr(arr){

    let finalArr = []
    let descArr = [...arr].sort((a,b) => a - b )
    // let ascArr = [...arr].sort((a,b) => a - b)
    let flag = true;
    let small = 0
    let big = arr.length - 1


    console.log(descArr)

    for(let i = 0; i<arr.length; i++){
        if(flag) {
            finalArr[i] = descArr[big--]
        }else{
            finalArr[i] = descArr[small++]
        }

        flag = !flag
    }



    return finalArr

}