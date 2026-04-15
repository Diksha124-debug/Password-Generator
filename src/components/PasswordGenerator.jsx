import React from 'react'
import { useState } from 'react'
function PasswordGenerator() {
    //initalizing variabels
    let [length, setLength] = useState(8);
    let [lower, setLower] = useState(false);
    let [upper, setUpper] = useState(false);
    let [number, setNumber] = useState(false);
    let[symbols,setSymbols] = useState(false);
    let[password,setPassword] = useState("");
    let[text,setText] = useState("copy")
    const generatePasswordLower = (e)=>{
       
        if(e.target.checked){
          setLower(true);
        }
        else{
            setLower(false);
        }
    
    }
   
    const generatePasswordNumber = (e) => {

        if (e.target.checked) {
            setNumber(true)
        }
        else {
           setNumber(false)
        }
     
    }
    const generatePasswordUpper = (e) => {

        if (e.target.checked) {
            setUpper(true)
        }
        else {
            setUpper(false)
        }
    
    }
    const generatePasswordSymbol = (e) => {

        if (e.target.checked) {
            setSymbols(true);
        }
        else {
            setSymbols(false);
        }
    }
  
    const randomPassword=()=>{
        //validation check
        if(lower == false && upper  == false&& number == false && symbols == false ){
            alert("kindly Add Input")
        }
        //Password creation
        let str = "";
        if(lower){
            str += "abcdefghijklmnopqrstuvwxyz"
        }
        if(upper){
            str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if(number){
            str += "1234567890"
        }
        if(symbols){
            str += "!@#~$%^&*()_{}+=|?.,:"
        }
        let actualString = "";
        for(let i=0;i<length;i++){
            actualString += str.charAt(Math.floor(Math.random() * str.length))
        }
       setPassword(actualString);
    }
    async function copiedClipboard(){
        try{
            await navigator.clipboard.writeText(password);
            if(password.length>0){
                setText("copied")
                setTimeout(()=>{
                    setText("copy")
                },2000)
                
            }
            else{
                alert("can not copy blank")
            }
        }
        catch(err){
            console.error("Failed to copy: ", err)
        }
    }
 
  return (
    <div>  
          <div className="password-generator">
              <h2>Password Generator</h2>
              <div className="txtfld">
                  <input type="text" name="pswd" id="pswdTxtId" value={password} disabled/>
                  <span
                      className={`material-symbols-outlined ${text === "copied" ? "cursor-no-drop bg-gray-600 " : "cursor-pointer bg-blue-600"}`}
                      id="copy"
                      onClick={() => {
                        if(text==="copy") copiedClipboard();
                      }}
                  >
                      {text}
                </span>
                  
              </div>

              <input type="range" name="lenRangeId" id="lenRange" min="1" max="30" value={length}
              onChange={(e)=>setLength(e.target.value)}/>
                  <div className="passflex">
                      <p>Password Length</p>
                      <p id="rangeNum">{length}</p>
                  </div>

                  <div className="checkflexContainer">
                      <div className="checkflex">
                          <label htmlFor="lowerCsId">Include Lowercase Letters (a-z)</label>
                      <input type="checkbox" name="lowerCs" id="lowerCsId" onChange={generatePasswordLower} />
                      </div>

                      <div className="checkflex">
                          <label htmlFor="upprcsId">Include Uppercase Letters (A-Z)</label>
                      <input type="checkbox" name="upprcs" id="upprcsId" onChange={generatePasswordUpper}/>
                      </div>

                      <div className="checkflex">
                          <label htmlFor="numId">Include Numbers (0-9)</label>
                          <input type="checkbox" name="num" id="numId" onChange={generatePasswordNumber}/>
                      </div>
                      <div className="checkflex">
                          <label htmlFor="spclId">Include Symbols (@-*)</label>
                      <input type="checkbox" name="spcl" id="spclId" onChange={generatePasswordSymbol}/>
                      </div>


                  </div>
                  <button type="button" onClick={randomPassword}>Generate Password</button>


          </div>
    </div>
  )
}

export default PasswordGenerator
