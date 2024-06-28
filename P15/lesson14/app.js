fetch("http://localhost:8080/hello")
.then((response) => {
    response.text().then((data) => {
        console.log("1: hello")
    })
});

console.log("2: hello")

const goNext = true;
if (goNext === true){
    console.log("3: hello")
}