
// Promise.then() Chaining

/* First part commented out:

let a= 1;
let b = 1;

slowMath.add(a,b)
.then((response) => {
    console.log(`Result 6+2 = ${response}`);
    
    //add(a, b);
    return slowMath.multiply(response, b)
})
.then((response)=> {
    console.log(`Result multiplied by 2: ${response}`);
    
    return slowMath.divide(response,4)
})
.then((response)=> {
    console.log(`Result divided by 4: ${response}`);

    //Wait on the result, log it, and then subtract 3 from the result.
    return slowMath.subtract(response,3)
    
})
.then((response)=> {
    console.log(`Result subtracted by 3: ${response}`);
    
    //5 Wait on the result, log it, and then add 98 to the result.
    return slowMath.add(response,98)

})
.then((response)=> {
    console.log(`Result plus 98: ${response}`);
    
    //6 Wait on the result, log it, and then find the remainder from dividing the result by 2.
    return slowMath.remainder(response,2)

})
.then((response)=> {
    console.log(`Remainder after dividing by 2: ${response}`);
    
    //7 multiply the result by 50.
    return slowMath.multiply(response,50)

})
.then((response)=> {
    console.log(`Result multiplied by 50: ${response}`);
    
    //8 find the remainder from dividing the result by 40.
    return slowMath.remainder(response,40)

})
.then((response)=> {
    console.log(`Remainder from dividing the result by 40: ${response}`);
    
    //9 Result + 32
    return slowMath.add(response,32)

})
.then((response)=> {
    console.log(`The final result is: ${response}`);
    
})
.catch(e => console.error(e))

*/

//-----------------------------------------------

//Async/Await (Part 2)

/* notes

const doMath = asynce () => {}
async function doMath(){

    let result = await slow
}

*/

let a= 6;
let b = 2;

//async function slowMath() {
const doMath = async () => {
    try {

        //1
        let response = await slowMath.add(a,b);
        
        console.log(`1. Result 6+2 = ${response}`);

        //2
        let response2 = await slowMath.multiply(response,2);
        console.log(`2. Result multiplied by 2: ${response2}`);

        //3
        let response3 = await slowMath.divide(response2,4);
        console.log(`3. Result divided by 4: ${response3}`);

        //4 - subtract 3
        let response4 = await slowMath.subtract(response3,3);
        console.log(`4. Result subtracted by 3: ${response4}`);


        //5 - add 98
        let response5 = await slowMath.add(response4,98);
        console.log(`5. Result plus 98: ${response5}`);


        //6 --find remainder from divide by 2
        let response6 = await slowMath.remainder(response5,2);
        console.log(`6. Remainder after dividing by 2: ${response6}`);

        //7 - multi by 50
        let response7 = await slowMath.multiply(response6,50);
        console.log(`7. Result multiplied by 50: ${response7}`);


        //8 -  remainder from dividing by 40 
        let response8 = await slowMath.remainder(response7,40);
        console.log(`8. Remainder from dividing the result by 40: ${response8}`);


        //9 - add 32
        let response9 = await slowMath.add(response8,32);


        //10 - final results
        console.log(`The final result is: ${response9}`);
        

    } catch (e) {
        console.log(e);
    }


}

doMath();

