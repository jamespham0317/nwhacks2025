import React from 'react';
import APIs from '../../APIKEYS'; // REPLACE WITH REAL IMPLEMENTATION
import $ from 'jquery';
import './RecycleRecognizer.css'

const getRecycleDetails = (object) => {
  var headers = new Headers()
  headers.append("Content-Type", "application/json")

  var raw = JSON.stringify({
    "contents": [
      {
        "parts": [
          {
            "text": " Explain whether "+object+" is recyclable in a local recycling depot or not. If it is only recyclable in some contexts, return true but elaborate in the notes. Return a message in the following form (DO NOT INCLUDE ANY OTHER TEXT): {'recyclable':$RECYCLEABLE$,'notes':$NOTES$} Where $RECYCLABLE$ is a boolean value (true / false) corresponding to whether or not the object can be recycled, and $NOTES$ is a short array of strings that give any additional necessary information about recycling the object. Do not preceed the text with 'json', and do not include spaces between dictionary arguments, but do include spaces within each note."
          }
        ]
      }
    ]
  })

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow"
  }

  fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="+APIs.Gemini, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      result = result.candidates[0].content.parts[0].text
      console.log(result)

      const recyclable = (result.split("'recyclable':")[1] ||"").split(",")[0]
      var displayResult = document.getElementById("isRecyclable")
      displayResult.innerHTML = (recyclable === 'true' ? "Recyclable!" : "Not Recyclable.")
      displayResult.style.cssText = "color:"+(recyclable === 'true' ? "green" : "red")

      const notes = ((result.split("'notes':['")[1] ||"").split("']}")[0]).split("','")
      var notesList = document.getElementById("notesList")
      notesList.innerHTML = ''
      for(var note in notes) {
        var item = document.createElement("li")
        item.innerHTML = notes[note]
        notesList.appendChild(item)
      }
    })
    .catch((error) => console.error(error))
}

const checkImage = () => {
  if ($('#objectImage')[0].files[0]) {
    var headers = new Headers()
    headers.append("X-Api-Key", APIs.APINinja)

    var formData = new FormData();
    formData.append('image', $('#objectImage')[0].files[0]);

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: formData
    }

    fetch("https://api.api-ninjas.com/v1/objectdetection", requestOptions)
      .then(response => response.json())
      .then((result) => {
        console.log(result)
        var resultDiv = document.getElementById("objectDescription")
        resultDiv.innerHTML = ''

        var name = document.createElement("p")
        name.innerHTML = "Object: "+result[0].label
        resultDiv.appendChild(name)

        var unsure = document.createElement("p")  
        unsure.innerHTML = "Object not accurate? Enter object description:"
        resultDiv.appendChild(unsure)

        var input = document.createElement("input")
        input.type = "text"
        resultDiv.appendChild(input)

        var submit = document.createElement("button")
        submit.innerHTML = "Submit"
        submit.onclick = function(){
          name.innerHTML = "Object: "+input.value
          getRecycleDetails(input.value)
        }
        resultDiv.appendChild(submit)

        getRecycleDetails(result[0].label)
      })
  }
}

const RecycleRecognizer = () => {
  return(
    <div className = 'body'>
      <h1 className='header'>Object Recognizer</h1>
      <div className="imageInput">
        <input id="objectImage" type="file" accept="image/*" capture="camera" />
        <button onClick={checkImage}>Check Image</button>
      </div>
      <br></br>
      <div id="objectDescription" className='objectDescription'/* Fill with object results */>
      </div>
      <h3 id="isRecyclable" className="isRecyclable"> </h3>
      <div className="listDiv">
        <ul id="notesList" className="notesList"></ul>
      </div>
      <br></br>
      <br></br>
      <h1 className='header'>What is the number on my plastic?</h1>
      <table>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Recyclable?</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Polyethylene Terephthalate (PET/PETE)</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>2</td>
          <td>High Density Polyethylene (HDPE)</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Polyvinyl Chloride (PVC)</td>
          <td>Yes, must be separated from other plastics</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Low Density Polyethylene (LDPE)</td>
          <td>Yes, must be separated from other plastics</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Polypropylene (PP)</td>
          <td>Yes, but difficult</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Polystyrene (PS)</td>
          <td>Yes, but difficult</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Other Plastics</td>
          <td>No</td>
        </tr>
      </table>
    </div>
  )
}

export default RecycleRecognizer;