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
            "text": "Explain whether " + object + " is recyclable or not. Return a message in the following form (DO NOT INCLUDE ANY OTHER TEXT): {'recyclable':$RECYCLEABLE$,'notes':$NOTES$} Where $RECYCLABLE$ is a number from the table: (0=false, 1=usually false, 2=true most of the time) corresponding to whether or not the object can be recycled. If it is only recyclable in extremely niche contexts, return 1 but elaborate in the notes. If it has a special depot, return true. $NOTES$ is a short array of strings that give any additional necessary information about recycling the object in the form of [$NOTE1$,$NOTE2$,...]. Do not preceed the text with 'json'"
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
      displayResult.innerHTML = (recyclable === '2' || recyclable === ' 2' ? "Recyclable!" : (recyclable === '1' || recyclable === ' 1' ? "Sometimes Recyclable!" : "Not Recyclable."))
      displayResult.style.cssText = "background-color:"+(recyclable === '2' || recyclable === ' 2' ? "rgb(111, 244, 120)" : (recyclable === '1' || recyclable === ' 1' ? "rgb(252, 220, 57)" : "rgb(247, 83, 83)"))

      var notes = ((result.split("'notes':['")[1] || result.split("'notes': ['")[1] ||"").split("']}")[0]).split("','")
      if(notes.length === 1)
        notes = notes[0].split("', '")
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
        <label htmlFor="objectImage" className="custom-file-upload">
          <i className="fa fa-cloud-upload"></i> Custom Upload
        </label>
        <input id="objectImage" type="file" accept="image/*" capture="camera" onInput={() => {
          document.documentElement.style.setProperty('--check-color', '#D2E5D2')
        }}/>
        <button onClick={checkImage} className="checkButton">Check Image</button>
      </div>
      <img id="chosenImage" src="#" alt="" />
      <br></br>
      <div id="objectDescription" className='objectDescription'/* Fill with object results */>
      </div>
      <div style={{display: 'flex',justifyContent: 'center'}}>
        <h3 id="isRecyclable" className="isRecyclable"> </h3>
      </div>
      <div className="listDiv">
        <ul id="notesList" className="notesList"></ul>
      </div>
      <br></br>
      <h1 className='header'>What is the number on my plastic?</h1>
      <div className = 'centerTable'>
        <table>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Recyclable?</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Polyethylene Terephthalate (PET/PETE)</td>
            <td className='yesBox'>Yes</td>
          </tr>
          <tr>
            <td>2</td>
            <td>High Density Polyethylene (HDPE)</td>
            <td className='yesBox'>Yes</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Polyvinyl Chloride (PVC)</td>
            <td className='maybeBox'>Yes, must be separated from other plastics</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Low Density Polyethylene (LDPE)</td>
            <td className='maybeBox'>Yes, must be separated from other plastics</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Polypropylene (PP)</td>
            <td className='maybeNotBox'>Yes, but difficult for some recyclers</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Polystyrene (PS)</td>
            <td className='maybeNotBox'>Yes, but difficult for some recyclers</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Other Plastics</td>
            <td className='noBox'>No</td>
          </tr>
        </table>
      </div>
      <br></br>
    </div>
  )
}

export default RecycleRecognizer;