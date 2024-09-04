const RandomName = () =>{
    const randomNames = ['Henri','Dionis','Edlira','Sidrit'];
    function genRandomInt(max){
        return Math.floor(Math.random()*(max+1));
    }
    const RandomName =randomNames[genRandomInt(3)];
    return(
        <p>Random name that's about to be generated is {RandomName}</p>
)
}
export default RandomName;