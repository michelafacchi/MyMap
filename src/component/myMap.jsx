import { Pin } from "./pin";
import React from "react";
import Input from "./input";
import Map from "./Map";

export default class MyMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pushPin : [],
            error : false
        };

        this.coordinates = {
            latitude : 0,
            longitude : 0
        };

        this.lastCoordinates = {
            latitude : 0,
            longitude : 0
        };

        this.title = '';
        this._formRef = React.createRef();
    };

    handleSubmit = e => {
        e.preventDefault();

        if(this.areCoordinates() === false) { 
            return
        };
        
        let a = [...this.state.pushPin];
        let pin = new Pin({...this.coordinates}, {title : this.title});

        a.push(pin)
        this.setState({
            pushPin : a
        });
        
       
        this.lastCoordinates.latitude = this.coordinates.latitude;
        this.lastCoordinates.longitude = this.coordinates.longitude;

     
    };

    change = e => {
        this.setState({
            error : false
        });

        if(e.target.name === 'title') {
            this.title = e.target.value;
            return;
        }

        this.coordinates[e.target.name] = e.target.value;
    };


    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <Map pushPins={this.state.pushPin} 
                    lastLatitude={this.lastCoordinates.latitude} 
                    lastLongitude={this.lastCoordinates.longitude}/>
                    <div className="col-md-4">
                        <form onSubmit={this.handleSubmit} ref={this._formRef}>
                            <Input change={this.change} id={'latitude'} type={'text'} name={'latitude'} labelName={'Latitude'} />
                            <Input change={this.change} id={'longitude'} type={'text'} name={'longitude'} labelName={'Longitude'} />
                            <Input change={this.change} id={'title'} type={'text'} name={'title'} labelName={'Label'} />
                            <button className="btn btn-primary mt-2">VIAGGIA!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    };

}