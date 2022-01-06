// -------------------------- (1)
let a = 1;
let outer = () => {
    let inner = () => {
        // console.log(a); // undefined 
        let a = 3;
    }
    inner(); // ------------- (2)
    console.log(a); // 1
}
outer(); // ------------------(3)
console.log(a); // 1