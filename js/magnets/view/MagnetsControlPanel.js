// Copyright 2013-2021, University of Colorado Boulder

/**
 * MagnetsControlPanel is a panel that contains controls for magnets.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */

import merge from '../../../../phet-core/js/merge.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import VBox from '../../../../scenery/js/nodes/VBox.js';
import RectangularPushButton from '../../../../sun/js/buttons/RectangularPushButton.js';
import Panel from '../../../../sun/js/Panel.js';
import exampleSim from '../../exampleSim.js';
import exampleSimStrings from '../../exampleSimStrings.js';
import dotRandom from '../../../../dot/js/dotRandom.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import Checkbox from '../../../../sun/js/Checkbox.js';
import TextPushButton from '../../../../sun/js/buttons/TextPushButton.js';

class MagnetsControlPanel extends Panel {

  /**
   * @param {MagnetsModel} model - the model for the entire screen
   * @param {Bounds2} layoutBounds
   * @param {ModelViewTransform2} modelViewTransform
   * @param {Object} [options] - options for the control panel, see Panel.js for options
   */
  constructor( model, layoutBounds, modelViewTransform, options ) {

    // Demonstrate a common pattern for specifying options and providing default values
    options = merge( {

      // Panel options
      xMargin: 10,
      yMargin: 10,
      stroke: 'orange',
      lineWidth: 3
    }, options );

    // 'Magnet Controls' title
    const magnetControlsTitleNode = new Text( exampleSimStrings.magnetControls, {
      font: new PhetFont( {
        size: 18,
        weight: 'bold'
      } )
    } );

    // 'Flip Polarity' button
    const flipPolarityButton = new RectangularPushButton( {
      content: new Text( exampleSimStrings.flipPolarity, {
        font: new PhetFont( 16 )
      } ),
      baseColor: 'yellow',
      xMargin: 10,
      listener: () => {
        const orientation = model.barMagnet.orientationProperty.get() + Math.PI;
        model.barMagnet.orientationProperty.set( orientation );
      }
    } );

    // 'Move Magnet' button
    const moveMagnetButton = new RectangularPushButton( {
      content: new Text( exampleSimStrings.moveMagnet, {
        font: new PhetFont( 16 )
      } ),
      baseColor: 'yellow',
      xMargin: 10,
      listener: () => {
        model.barMagnet.positionProperty.set( this.getRandomPosition( layoutBounds, modelViewTransform ) );
      }
    } );

    // 'Add Magnet' button
    const addMagnetButton = new TextPushButton( exampleSimStrings.addMagnet, {
      font: new PhetFont( 16 ),
      baseColor: 'blue',
      xMargin: 10,
      listener: () => {
        model.additionalBarMagnets.push( model.createBarMagnet( this.getRandomPosition( layoutBounds, modelViewTransform ) ) );
        console.log( model.additionalBarMagnets );
      }
    } );

    //'Magnet Visibility' checkbox, hides/shows magnet
    const magnetVisibilityCheckbox = new Checkbox( new Text( exampleSimStrings.toggleVisibility ), model.barMagnet.visibleProperty );

    // The contents of the control panel
    const content = new VBox( {
      align: 'center',
      spacing: 10,
      children: [
        magnetControlsTitleNode,
        flipPolarityButton,
        moveMagnetButton,
        addMagnetButton,
        magnetVisibilityCheckbox
      ]
    } );

    super( content, options );
  }

  /**
   *
   * @param layoutBounds
   * @param modelViewTransform
   * @returns {*|Vector3}
   * @private
   */
  getRandomPosition( layoutBounds, modelViewTransform ) {
    const randomX = dotRandom.nextDouble() * layoutBounds.width;
    const randomY = dotRandom.nextDouble() * layoutBounds.height;
    return modelViewTransform.viewToModelPosition( new Vector2( randomX, randomY ) );
  }
}

exampleSim.register( 'MagnetsControlPanel', MagnetsControlPanel );
export default MagnetsControlPanel;