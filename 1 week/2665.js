/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let copy = init
    return{
        increment: ()=>{
            init = init +1
            return init
        },
        reset: () => {
            init = copy
            return init 
        },
        decrement:()=> {
            init = init -1
            return init

        }
    }
};