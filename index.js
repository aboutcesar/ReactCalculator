function App(){
    //hook, expression is the current expression and set expression is the function to update
    const [expression,setExpression] = React.useState("");
    const [answer,setAnswer] = React.useState(0);
    

    const display = (symbol) => {
        setExpression(prev => prev + symbol) //sets the expression equal to the previous one + the next symbol 
        if(expression(expression.length-1) == "="){
            if(/[1-9.]/.test(symbol)){
                setExpression(symbol) //set expression to symbol which erases the other expression
            }else{
                setExpression(answer+symbol); 
            }
        }
    };
    const calculate = () => {
        setAnswer(eval(expression)); //evaluate the expression that was input 
        setExpression((prev) => prev + "=");
    }
    //AC allClear, set expression displayed and answer displayed
    const allClear = () => {
        setExpression("");
        setAnswer(0);
    };
    //C clear, splice until the last symbol then rejoin
    const clear = () => {
        setExpression(prev => prev.split("").slice(0,prev.length-1).join(""));
        setAnswer(0);
    };
    //render the container as a div. 
    return (
        <div className = "container">
            <div className="grid">
                <div className="dis">
                    <input type="text" value={expression} placeholder="0" disabled />
                    <div className = "total">{answer}</div>
                </div> 
                <div onClick = {allClear} className="padButton AC tomato">AC</div>
                <div onClick = {clear} className="padButton C tomato">C</div>
                <div onClick = {() => display("/")} className="padButton div">/</div>
                <div onClick = {() => display("*")} className="padButton times">x</div>
                <div onClick = {() => display("7")} className="padButton seven dark-grey">7</div>
                <div onClick = {() => display("8")} className="padButton eight dark-grey">8</div>
                <div onClick = {() => display("9")} className="padButton nine dark-grey">9</div>
                <div onClick = {() => display("-")} className="padButton minus">-</div>
                <div onClick = {() => display("4")} className="padButton four dark-grey">4</div>
                <div onClick = {() => display("5")} className="padButton five dark-grey">5</div>
                <div onClick = {() => display("6")} className="padButton six dark-grey">6</div>
                <div onClick = {() => display("+")} className="padButton plus">+</div>
                <div onClick = {() => display("1")} className="padButton one dark-grey">1</div>
                <div onClick = {() => display("2")} className="padButton two dark-grey">2</div>
                <div onClick = {() => display("3")} className="padButton three dark-grey">3</div>
                <div onClick = {calculate} className="padButton equal blue">=</div>
                <div onClick = {() => display("0")} className="padButton zero dark-grey">0</div>
                <div onClick = {() => display(".")} className="padButton dot dark-grey">.</div>

            </div>
        </div>



    );
        


    


}

ReactDOM.render(<App/>, document.getElementById("root"));