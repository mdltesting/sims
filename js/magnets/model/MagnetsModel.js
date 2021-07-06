// Copyright 2013-2020, University of Colorado Boulder

/**
 * MagnetsModel is the top-level model for the 'Magnets' screen. You can think of the top-level model as a container
 * for all of the pieces that make up the model for a screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import exampleSim from '../../exampleSim.js';
import BarMagnet from './BarMagnet.js';
import createObservableArray from '../../../../axon/js/createObservableArray.js';

class MagnetsModel {

  constructor() {

    // @public {BarMagnet} initial bar magnet model element
    this.barMagnet = this.createBarMagnet( new Vector2( 0, 0 ) );
    this.additionalBarMagnets = createObservableArray();
  }

  /**
   * Restores the initial state of all model elements.
   * This method is called when the simulation's "Reset All" button is pressed.
   * @public
   */
  reset() {
    this.barMagnet.reset();
  }

  /**
   *
    * @param magnetPosition
   * @returns {BarMagnet}
   * @public
   */
  createBarMagnet( magnetPosition ) {
    return new BarMagnet( {
      position: magnetPosition,
      orientation: 1
    } );
  }
}

exampleSim.register( 'MagnetsModel', MagnetsModel );
export default MagnetsModel;