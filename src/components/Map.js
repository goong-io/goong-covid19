import React, { PureComponent } from 'react';
import MapGL, { Marker, NavigationControl, GeolocateControl } from '@goongmaps/goong-map-react';
import pin from '../assets/virus.png';


class Markers extends PureComponent {
    render() {
        const { data } = this.props;
        return data.map(
            location =>
                <Marker key={location.location_name} longitude={location.lon} latitude={location.lat} offsetLeft={-17.5} offsetTop={-17.5}><img src={pin} /></Marker>
        )
    }
}


class Map extends PureComponent {
    state = {
        hoveredFeature: null,
        viewport: {
            latitude: 16.119786,
            longitude: 105.9491124,
            zoom: 5.4,
            bearing: 0,
            pitch: 0

        }
    };

    _sourceRef = React.createRef();

    _onViewportChange = viewport => this.setState({ viewport });

    _onClick = event => {
        const features = event.features;

        const hoveredFeature = features && features.find(f => f.layer.id === 'corona');

        this._onViewportChange({
            ...this.state.viewport,
            longitude: hoveredFeature.geometry.coordinates[0],
            latitude: hoveredFeature.geometry.coordinates[1],
            zoom: 5,
            transitionDuration: 500
        });

    };

    render() {
        const { viewport } = this.state;

        return (
            <MapGL
                {...viewport}
                width="100vw"
                height="100vh"
                minZoom={1}
                goongApiAccessToken="yQHvg5nXZ4vx3gSMyrkZwT0NbRPIPzYMgDtBVh1r"
                mapStyle="https://tiles.goong.io/assets/goong_map_dark.json"
                onViewportChange={this._onViewportChange}
                onClick={this._onClick}
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
