<!DOCTYPE html>
<html>
  <head>
    <title>Week 10 CIT 261</title>
      <style>
    select{
    background-color: red;
    background-position:300px;
    width:353px;
    padding:12px;
    margin-top:8px;
    font-family:Cursive;
    line-height:1;
    border-radius:5px;
    background-color:#A2AB58;
    color:#ff0;
    font-size:20px;
    -webkit-appearance:none;
    box-shadow:inset 0 0 10px 0 rgba(0,0,0,0.6);
    outline:none
    }
    
    #result, #output{
    color: black;
    font-size: 30px;
    font-weight: bold;
    }
    #id{
    text-align:center;
    opacity: 0.6;
    filter: alpha(opacity=60); 
    }
    .b{
    background-color: #4CAF50;
    border: none;
    color: #ff0;
    font-family:Cursive;
    padding: 15px 32px;
    border-radius:5px;
    width:220px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    font-weight: bold;
    }
    
    #json{   
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 4px solid yellow;
    border-radius: 10px;
    background-color: #3CBC8D;
    color: blue;
    font-weight: bold;
    font-size: 16px;
    }
    #grad{
    background: red;   /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(red, yellow); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(red, yellow); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(red, yellow); /* For Firefox 3.6 to 15 */
    background: linear-gradient(red, yellow); /* Standard syntax */
    }
  </style>
    
    <script type="text/javascript" src="script.js"></script> 
  </head>
  
  <body style="background-color:#87CEFA;" onload="readFile()">

    <h1 style="text-align:center;">CIT 261</h1>
    <p style="text-align:center;font-size:30pt;" id="grad">
      Choose a country to display its 10 largest cities and their populations: 
    </p>
    <div id="id">
      <select id="cities" onchange="readFile()">
        <option value="usa.txt">USA</option>
        <option value="mexico.txt">Mexico</option>
        <option value="russia.txt">Russia</option>
        <option value="canada.txt">Canada</option>
     </select>
     <pre id="result"></pre>
    </div>
      
    <input type="text" name="file" id="json" value="json.txt">
    <input type="button" class="b" value="Display" onclick="readJsonFile()">
    <pre id="output"></pre> 
          
   </body>
</html>
