let serialNumber = 0;

// ------------- Triangle 1 ------------
// get the data from using id 

document.getElementById('triangle-calculate').addEventListener('click', function () {
    serialNumber += 1;


    // calculation 
    const triangleTittleElement = document.getElementById('triangle-Title').innerText;

    const triangleBValue = document.getElementById('trianglebinput').value;
    const triangleHValue = document.getElementById('trianglehinput').value;
    console.log(triangleBValue);

    // validation check trinagle 
    if (triangleBValue == '' || isNaN(triangleBValue) || triangleBValue < 0 || triangleHValue == '' || isNaN(triangleHValue) || triangleHValue < 0) {
        alert("Enter valid number");
    }
    else {

        const rendomTriangleValue = 0.5;
        const bhMultipication = parseInt(triangleBValue) * parseInt(triangleHValue);
        const areaTriangleCalculation = rendomTriangleValue * bhMultipication;

        const twoNumberFixedValuetriangleTotal = areaTriangleCalculation.toFixed(2);
        // show the data 
        displayData(serialNumber, triangleTittleElement, twoNumberFixedValuetriangleTotal);

    }

});
// ------------- Rectangle 2------------
// get the data from using id 

document.getElementById('rectangle-calculate').addEventListener('click', function () {

    serialNumber += 1;

    const rectangleTittleElement = document.getElementById('Rectangle-Title').innerText;
    const rectangleWValue = document.getElementById('rectangleWinput').value;
    const rectangleIValue = document.getElementById('rectangleIinput').value;

        // validation check trinagle 

    if (rectangleWValue == '' || isNaN(rectangleWValue) || rectangleWValue < 0 || rectangleIValue == '' || isNaN(rectangleIValue) || rectangleIValue < 0) {
        alert("Enter valid number");
    }
    else {


        const wiMultipication = parseInt(rectangleWValue) * parseInt(rectangleIValue);

        const twoNumberFixedValueRectangleTotal = wiMultipication.toFixed(2);


        // show the data 
        displayData(serialNumber, rectangleTittleElement, twoNumberFixedValueRectangleTotal);

    }

});


// ------------- Parallelogram 3------------
// get the data from using id 


document.getElementById('parallelogram-calculate').addEventListener('click',function(){
serialNumber += 1;

    const parallelogramTittleElement = document.getElementById('Parallelogram-Title').innerText;
    const parallelogramOneValue = document.getElementById('ParallelogrambValue').innerText;
    const parallelogramTwoValue = document.getElementById('ParallelogramhValue').innerText;

   
    const bhValueMultipication = parseInt(parallelogramOneValue) * parseInt(parallelogramTwoValue);
    
    const twoNumberFixedValueparallelogramTotal = bhValueMultipication.toFixed(2);

   // show the data 
   displayData(serialNumber,parallelogramTittleElement,twoNumberFixedValueparallelogramTotal);

    
});


// ------------- Rhombus 4------------
// get the data from using id 

document.getElementById('rhombus-calculate').addEventListener('click',function(){
    
    serialNumber += 1;


    const rhombusTittleElement = document.getElementById('Rhombus-Title').innerText;
    const rhombusdOneValue = document.getElementById('RhombusDOne').innerText;
    const rhombusdTwoValue = document.getElementById('RhombusDTwo').innerText;

   
    const rendomRhombusValue = 0.5 ;
    const dOnedTwoValueMultipication = parseInt(rhombusdOneValue) * parseInt(rhombusdTwoValue);
    const areaRhombusCalculation = rendomRhombusValue * dOnedTwoValueMultipication;
    
    const twoNumberFixedValueRhombusTotal = areaRhombusCalculation.toFixed(2);


    // show the data 
    displayData(serialNumber,rhombusTittleElement,twoNumberFixedValueRhombusTotal);


});


// ------------- Pentagon 5------------
// get the data from using id 


document.getElementById('pentagon-calculate').addEventListener('click',function(){

    serialNumber += 1;

    const pentagonTitleElement = document.getElementById('Pentagon-Title').innerText;
    const pentagonaValue = document.getElementById('PentagonAInput').innerText;
    const pentagonbValue = document.getElementById('PentagonBInput').innerText;

    
    // calculation 
    const rendomPentagonValue = 0.5;
    const pbValueMultipication = parseInt(pentagonaValue) * parseInt(pentagonbValue);
    const areaPentagonCalculation = rendomPentagonValue * pbValueMultipication;

    const twoNumberFixedValuePentagonTotal = areaPentagonCalculation.toFixed(2);

    // show the data 
    displayData(serialNumber,pentagonTitleElement,twoNumberFixedValuePentagonTotal);

});
// ------------- Ellipse 6------------

// get the data from using id 

document.getElementById('eliiplse-calculate').addEventListener('click',function(){
    serialNumber += 1;

    const eliiplseTitleElement = document.getElementById('Ellipse-Title').innerText;
    const eliiplseaValue = document.getElementById('EllipseAInput').innerText;
    const eliiplsebValue = document.getElementById('EllipseBInput').innerText;

    // calculation 
    const pi = 3.1416;
    const abValueMultipication = parseInt(eliiplseaValue) * parseInt(eliiplsebValue);
    const areaEllipseCalculation = pi * abValueMultipication;

    // string to number convert
    const twoNumberFixedValueEllipseTotal = areaEllipseCalculation.toFixed(2)

    // show the data 
    displayData(serialNumber,eliiplseTitleElement,twoNumberFixedValueEllipseTotal);

});

// common function to display data 
function displayData(serialNumber,eliiplseTitleElement,twoNumberFixedValueEllipseTotal){
       // table row create 
       const container = document.getElementById('table-container');

       const tr = document.createElement("tr");
       tr.innerHTML = `
       <td>${serialNumber} </td>
       <td>${eliiplseTitleElement} </td>
       <td>${twoNumberFixedValueEllipseTotal} cm<sup>2</sup> </td>
       <td><button class="btn btn-info text-white ">Convert to M<sup>2</sup></button></td>
      
   
       `;
       container.appendChild(tr);
};


// hover random color 

function cardChangeColor1(){
    document.getElementById('cardColorBg1').style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' +  Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')'; 

}
function cardChangeColor2(){
    document.getElementById('cardColorBg2').style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' +  Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')'; 

}
function cardChangeColor3(){
    document.getElementById('cardColorBg3').style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' +  Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')'; 
}
function cardChangeColor4(){
    document.getElementById('cardColorBg4').style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' +  Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')'; 

}
function cardChangeColor5(){
    document.getElementById('cardColorBg5').style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' +  Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')'; 
}
function cardChangeColor6(){
    document.getElementById('cardColorBg6').style.backgroundColor=
    'rgb(' + Math.round(Math.random() * 255) +
    ',' +  Math.round(Math.random() * 255) +
    ',' + Math.round(Math.random() * 255) + ')'; 
}


