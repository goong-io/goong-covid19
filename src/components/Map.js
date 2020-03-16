import React, { PureComponent } from 'react';
import MapGL, { Marker, NavigationControl } from '@goongmaps/goong-map-react';
import pin from '../assets/virus.png';


class Markers extends PureComponent {
    render() {
        const { data } = this.props;
        return data.map(
            location =>
                <Marker key={location.location_name} longitude={location.lon} latitude={location.lat} offsetLeft={-17} offsetTop={-43}><img alt="virus_marker" src={pin} /></Marker>
        )
    }
}


class Map extends PureComponent {
    state = {
        hoveredFeature: null,
        viewport: {
            latitude: 16.510187,
            longitude: 105.649740,
            zoom: 5.2,
            bearing: 0,
            pitch: 0

        }
    };

    _sourceRef = React.createRef();

    _onViewportChange = viewport => this.setState({ viewport });

    render() {
        const { viewport } = this.state;

        return (
            <MapGL
                {...viewport}
                width="100vw"
                height="100vh"
                minZoom={1}
                goongApiAccessToken={process.env.REACT_APP_GOONG_MAP_TILES_KEY}
                mapStyle="https://tiles.goong.io/assets/goong_map_web.json"
                onViewportChange={this._onViewportChange}
            >
                <div style={{ position: 'absolute', right: 10, top: 30 }}>
                    <NavigationControl />
                </div>                  
                {this.props.points.length > 0 ? <Markers data={this.props.points} /> : null}

            </MapGL>
        );
    }
}

export default Map
