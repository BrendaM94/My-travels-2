import React from "react";
import Travel from "./Travel"

const array =[{
    destination:"Madrid",
    country:"Spain",
    photo:"https://assets3.thrillist.com/v1/image/2699171/size/gn-gift_guide_variable_c.jpg",
    distance:"2000"
}, {
    destination:"Kyoto",
    country:"Japan",
    photo:"https://dw8stlw9qt0iz.cloudfront.net/mBR3l0mmM8ADfLpZOClXcgr9t1w=/fit-in/800x450/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/landscape/standard/eb770df9-213b-4be4-cab7-84240f970ab7.jpg",
    distance:"10.000"

}, {
  destination:"Amsterdam",
  country:"The Netherlands",
  photo:"https://www.pr-medicalevents.com/wp-content/uploads/2018/11/11.jpg",
  distance:"10.000"

}, {
  destination:"Rio",
  country:"Brasil",
  photo:"https://www.pandotrip.com/wp-content/uploads/2013/07/Untitled-62-980x613.jpg",
  distance:"10.000"

}, {
  destination:"Oahu",
  country:"USA",
  photo:"https://i0.wp.com/www.suncountryview.com/wp-content/uploads/2018/07/Honolulu-Instagram_Header_1200x800.jpg?fit=1200%2C800",
  distance:"10.000"

}, {
  destination:"Galapagos",
  country:"Ecuador",
  photo:"https://galapagoslowcost.com/wp-content/uploads/Isla-Isabela-Galapagos.jpg",
  distance:"10.000"

}, {
  destination:"Berlin",
  country:"Germany",
  photo:"https://ctcdn.azureedge.net/cloudcache/6/4/5/4/1/5/645415e1d2bea11f499c47ac3ce957d1a86c65ed.jpg",
  distance:"10.000"

}];


const Travels = () => (  //prop esel 1er argumento de una funcion 
    <div>
      <h2>Travels.js </h2>
      {array.map(item => (
      <Travel 
        destination = {item.destination}
        country = {item.country}
        photo = {item.photo}
        distance = {item.distance}
        />
        ))}
        </div>
)
export default Travels;