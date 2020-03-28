import React, { PureComponent } from 'react';
import MapGL, { Marker, NavigationControl, Popup } from '@goongmaps/goong-map-react';
import pin from '../assets/virus.png';
import Geocoder from '@goongmaps/goong-geocoder-react';
import '@goongmaps/goong-geocoder/dist/goong-geocoder.css';

class Map extends PureComponent {
    state = {
        viewport: {
            latitude: 16.510187,
            longitude: 105.649740,
            zoom: 5.2,
            bearing: 0,
            pitch: 0

        },
        popupInfo: null
    };

    mapRef = React.createRef();

    _onViewportChange = viewport => this.setState({ viewport });
    _renderMarker = (data) => {
        return data.map(
            (location, index) =>
                <Marker key={`marker-${index}`}
                    longitude={location.lng}
                    latitude={location.lat}
                    offsetLeft={-17}
                    offsetTop={-43}
                >
                    <img alt="virus_marker"
                        src={pin}
                        onClick={() => this.setState({ popupInfo: location })} />
                </Marker>
        )
    }
    _renderPopup() {
        const { popupInfo } = this.state;

        return (
            popupInfo && (
                <Popup
                    offsetTop={-43}
                    tipSize={5}
                    anchor="bottom"
                    longitude={popupInfo.lng}
                    latitude={popupInfo.lat}
                    closeOnClick={false}
                    onClose={() => this.setState({ popupInfo: null })}
                >
                    <div className="goong-popup" style={{ width: '300px' }}>
                        <div style={{ marginBottom: '5px' }}><strong> Tên: </strong>{popupInfo.name}</div>
                        <div style={{ marginBottom: '5px' }}><strong> Địa chỉ: </strong>{popupInfo.address}</div>
                        <div style={{ marginBottom: '5px' }}><strong> Thời gian: </strong>{new Date(popupInfo.verifyDate).toLocaleDateString('vi-vn')}</div>
                        <div> <strong>Ghi chú:</strong></div>
                        <p style={{ marginLeft: '15px', marginTop: '0px' }}>{popupInfo.note}</p>
                    </div>
                </Popup>
            )
        );
    }
    render() {
        const { viewport } = this.state;

        return (
            <MapGL
                ref={this.mapRef}
                {...viewport}
                width="100vw"
                height="100vh"
                minZoom={1}
                goongApiAccessToken={process.env.REACT_APP_GOONG_MAP_TILES_KEY}
                mapStyle="https://tiles.goong.io/assets/goong_map_web.json"
                onViewportChange={this._onViewportChange}
            >
                {this.props.points.length > 0 ? this._renderMarker(this.props.points) : null}
                {this._renderPopup()}
                <div style={{ position: 'absolute', right: 15, bottom: 30 }}>
                    <NavigationControl />
                </div>
                <Geocoder
                    mapRef={this.mapRef}
                    onViewportChange={this._onViewportChange}
                    goongApiAccessToken={process.env.REACT_APP_GOONG_API_KEY}
                />

            </MapGL>
        );
    }
}

export default Map
