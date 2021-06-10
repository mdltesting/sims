// Copyright 2013-2020, University of Colorado Boulder

/**
 * Model of a simple bar magnet.
 * The magnet has fixed size, and mutable position and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import exampleSim from '../../exampleSim.js';
import Dimension2 from '../../../../dot/js/Dimension2';
import Vector2 from '../../../../dot/js/Vector2';

class BarMagnet {
  size: Dimension2;
  positionProperty: Property;
  orientationProperty: Property;

  /**
   * Create a new bar magnet model. The magnet has fixed size, and mutable position and orientation.
   *
   * @param {Dimension2} size - the size of the bar magnet in model coordinates
   * @param {Vector2} position - the position of the bar magnet in model coordinates
   * @param {number} orientation - in radians
   */
  constructor( size: Dimension2, position: Vector2, orientation: number ) {

    // @public (read-only) {Dimension2} the size of the bar magnet in model coordinates
    this.size = size;

    // @public {Vector2} the position of the bar magnet in model coordinates
    this.positionProperty = new Property( position );

    // @public {number} in radians
    this.orientationProperty = new Property( orientation );
  }

  /**
   * Restores the initial state of the BarMagnet. This method is called when the simulation "Reset All" button is
   * pressed. Note that BarMagnet.size is constant and does not need to be reset.
   * @public
   */
  reset() {
    this.positionProperty.reset();
    this.orientationProperty.reset();
  }
}

exampleSim.register( 'BarMagnet', BarMagnet );
export default BarMagnet;