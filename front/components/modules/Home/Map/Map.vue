<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
  data() {
    return {
      map: null,
      markers: [],
      collectifs: [
        {
          // https://www.gps-longitude-latitude.net/
          location: { lng: 3.518332, lat: 50.357113 },
          description: 'Cols verts Valenciennes',
          url: 'http://www.lescolsverts.com/collectifs/valenciennes',
          address: '1, rue du paradis des cols verts 00000 ville',
        },
        {
          location: { lng: -1.677793, lat: 48.117266 },
          description: 'Cols verts Rennes',
          url: 'http://www.lescolsverts.com/collectifs/rennes',
          address: '1, rue du paradis des cols verts 00000 ville',
        },
        {
          location: { lng: 2.148641, lat: 43.925085 },
          description: 'Cols verts Albi',
          url: 'http://www.lescolsverts.com/collectifs/albi',
          address: '1, rue du paradis des cols verts 00000 ville',
        },
        {
          location: { lng: 3.876716, lat: 43.610769 },
          description: 'Cols verts Montpellier',
          url: 'http://www.lescolsverts.com/collectifs/montpellier',
          address: '1, rue du paradis des cols verts 00000 ville',
        },
        {
          location: { lng: 7.752111, lat: 48.573405 },
          description: 'Cols verts Strasbourg',
          url: 'http://www.lescolsverts.com/collectifs/strasbourg',
          address: '1, rue du paradis des cols verts 00000 ville',
        },
        {
          location: { lng: -61.024174, lat: 14.641528 },
          description: 'Cols verts Martinique',
          url: 'http://www.lescolsverts.com/collectifs/martinique',
          address: '1, rue du paradis des cols verts 00000 ville',
        },
        {
          location: { lng: 11.045721, lat: 35.502446 },
          description: 'Cols verts Mahdia',
          url: 'http://www.lescolsverts.com/collectifs/mahdia',
          address: '1, rue du paradis des cols verts 00000 ville',
        },
      ],
    };
  },
  mounted() {
    // https://gist.github.com/mornir/9e85e65caba46e55269302e8a134e04e
    // https://www.mapbox.com/install/js/bundler-complete/
    // https://docs.mapbox.com/mapbox-gl-js/example/
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoibGVzY29sc3ZlcnRzIiwiYSI6ImNraWcxeDRyMjBhcXYycW1xMmI4NW82bnIifQ.r9W_FGY8gVm5DRxdcmymDQ',
      container: 'map', // <div id="map"></div>
      style: 'mapbox://styles/mapbox/streets-v11', // default style // V11 - V9 => to try
      center: [2.213749, 46.227638], // starting position as [lng, lat] [-77.04, 38.907],
      zoom: 1, // 1 = monde, 2 = europe, 3 = west europe, 4 = france,
      // pitch: 0,
      // maxZoom: 17,
      // maxBounds: [
      //   [6.02260949059, 45.7769477403], // Southwest coordinates
      //   [10.4427014502, 47.8308275417], // Northeast coordinates
      // ],
    });

    this.markers = this.collectifs.map((collectif) => {
      const LngLat = [collectif.location.lng, collectif.location.lat];
      const marker = new mapboxgl.Marker().setLngLat(LngLat).addTo(this.map);
      marker.description = collectif.description;
      return marker;
    });
  },
};
</script>
<style>
#map,
.mapboxgl-canvas {
  min-height: 40vh;
  min-width: 75vh;
}
</style>
