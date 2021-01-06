import React from 'react';
import './_Map.scss';
import { ReactBingmaps } from 'react-bingmaps';

export default function Map() {

  const YourBingMapsKey = 'ApTgQsA_1ru04YR2DpZBe2xVSpOrYI9WJJDuMLisZu-MryfrveshaFSkyHqYlInN';
  return(
    <div className="map-contener">
    <ReactBingmaps
      bingmapKey = {YourBingMapsKey}
      center = {[53.9022, 27.5618]}
      zoom = {6.5}>
    </ReactBingmaps>
    </div>
  );
}
