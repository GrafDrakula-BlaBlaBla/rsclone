import React from 'react';
import './_MapMain.scss';


class Legend extends React.Component {

  render() {
    return (
      <div className="legend-container">
        <div className="legend-container-wrapper-inform">
          <h3>Легенда</h3>
          <div className="legend-information-container" >
            <div className="item-legend"><div className="circle-legend color-red"> </div><div>Прошедшие</div></div>
            <div className="item-legend"><div className="circle-legend color-yellow"> </div><div>Сегодня</div></div>
            <div className="item-legend"><div className="circle-legend color-green"> </div><div>Предстоящие</div></div>
          </div>
        </div>
      </div>
      );
    }
  };

export default Legend;
