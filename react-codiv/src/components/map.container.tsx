import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};
type Props = {
    google: any
}
export class MapContainer extends React.Component<Props> {
    
  render() {
    return (
      <Map
        google = {this.props.google}
        zoom = {14}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
})(MapContainer);
