<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import { collectifs } from '@/components/modules/Home/Map/collectifs';

export default {
  data() {
    return {
      selectedMarker: null,
      map: null,
      markers: [],
      collectifs,
    };
  },
  mounted() {
    /* istanbul ignore file */

    // https://gist.github.com/mornir/9e85e65caba46e55269302e8a134e04e
    // https://www.mapbox.com/install/js/bundler-complete/
    // https://docs.mapbox.com/mapbox-gl-js/example/
    this.map = new mapboxgl.Map({
      accessToken: process.env.MAPBOX_API_TOKEN,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // default style // V11 - V9 => to try
      center: [2.213749, 46.227638], // starting position as [lng, lat] [-77.04, 38.907],
      zoom: 1, // 1 = monde, 2 = europe, 3 = west europe, 4 = france,
    });

    this.markers = this.collectifs.map((collectif) => {
      let popup = `<a href="${collectif.url}" class="font-bold">${collectif.description}</a>`;
      popup += `<p>${collectif.address}</p>`;
      popup += `<p>${collectif.city}</p>`;
      popup += `<br><p>${collectif.remark}</p>`;

      const element = document.createElement('div');
      element.className = 'marker';
      element.addEventListener('click', (e) => {
        // flyTo sometimes fails to trigger the close event on the popup
        if (this.selectedMarker) {
          this.selectedMarker.classList.remove('hidden');
        }
        this.selectedMarker = e.target;
        this.selectedMarker.classList.add('hidden');
        this.map.flyTo({ center: LngLat, speed: 0.5 });
      });
      const popupElement = new mapboxgl.Popup({
        offset: 0,
        anchor: 'bottom',
      }).setHTML(popup);
      popupElement.on('close', () => {
        if (this.selectedMarker) {
          this.selectedMarker.classList.remove('hidden');
        }
      });

      const LngLat = [collectif.location.lng, collectif.location.lat];
      const marker = new mapboxgl.Marker({ element, offset: [0, -10] })
        .setLngLat(LngLat)
        .setPopup(popupElement)
        .addTo(this.map);

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

.marker {
  background-image: url('Pin.svg');
  background-size: cover;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>
