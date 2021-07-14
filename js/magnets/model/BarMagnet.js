// Copyright 2013-2021, University of Colorado Boulder

/**
 * BarMagnet is the model of a simple bar magnet. The magnet has fixed size, and mutable position and orientation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Property from '../../../../axon/js/Property.js';
import exampleSim from '../../exampleSim.js';
import merge from '../../../../phet-core/js/merge.js';
import Dimension2 from '../../../../dot/js/Dimension2.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import BooleanProperty from '../../../../axon/js/BooleanProperty.js';

class BarMagnet {

  /**
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor( options ) {

    // Default  values.
    options = merge( {
      size: new Dimension2( 262.5, 52.5 ),
      position: new Vector2( 0, 0 ),
      orientation: 0
    }, options );

    // @public (read-only) {Dimension2} the size of the bar magnet in model coordinates
    this.size = options.size;

    // @public {Vector2} the position of the bar magnet in model coordinates
    this.positionProperty = new Property( options.position );

    // @public {number} in radians
    this.orientationProperty = new Property( options.orientation );

    //@public {Property.<boolean>} whether or not the bar magnet is visible
    this.visibleProperty = new BooleanProperty( true );
  }

  /**
   * Restores the initial state of the BarMagnet. This method is called when the simulation's "Reset All" button is
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