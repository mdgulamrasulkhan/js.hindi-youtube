// 1 method
// immediately invoked functions Expresions
function chai(){
    console.log("DB Connected");
}
chai();

// 2nd method

(function chai(){
    console.log("DB Connected");
})
();

// 3rd method
(() => {
    console.log("DB Connected");
})
()