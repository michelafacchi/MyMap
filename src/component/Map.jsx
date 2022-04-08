import React from "react";
import BingMapsReact from "bingmaps-react";

//export class Map extends React.Component {
//  constructor (props) { 
//    super(props);

//  this.state = {
//     latitude: 45.463664,
//      longitude: 9.190750
//    }
// };
 
export default function Map (props){
    
  return (
      <div className="col-md-8">
          <BingMapsReact
              pushPins = {props.pushPins}
              bingMapsKey="Ask0RJ2KredAzLTUAJy23WaNHMnpt2kKyxtRtoibIGEgsrOMXj33ke0Cf-cTXcnU"
              height="400px"
              mapOptions={{
              navigationBarMode: "square",
              showLocateMeButton: false,
              }}
              width="100%"
              viewOptions={{
              center: { latitude: props.lastLatitude, longitude: props.lastLongitude },
              mapTypeId: "road",
              }}
          />
      </div>
  );

}
      
        