// Copyright 2013-2017, University of Colorado Boulder

/**
 * View for the 'Example' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Steele Dalton (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var BarMagnetNode = require( 'EXAMPLE_SIM/example/view/BarMagnetNode' );
  var Bounds2 = require( 'DOT/Bounds2' );
  var ControlPanel = require( 'EXAMPLE_SIM/example/view/ControlPanel' );
  var exampleSim = require( 'EXAMPLE_SIM/exampleSim' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var AccessibleScreenView = require( 'JOIST/AccessibleScreenView' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * Constructor for the ExampleScreenView, it creates the bar magnet node and control panel node.
   *
   * @param {ExampleModel} model - the model for the entire screen
   * @constructor
   */
  function ExampleScreenView( model ) {

    AccessibleScreenView.call( this, {
      layoutBounds: new Bounds2( 0, 0, 768, 504 )
    } );

    // model-view transform
    var center = new Vector2( this.layoutBounds.width / 2, this.layoutBounds.height / 2 );
    var modelViewTransform = ModelViewTransform2.createOffsetScaleMapping( center, 1 );

    var barMagnetNode = new BarMagnetNode( model.barMagnet, modelViewTransform );
    var controlPanel = new ControlPanel( model, {
      x: 50,
      y: 50
    } );
    this.addChild( barMagnetNode );
    this.addChild( controlPanel );

    // a11y - put content into their respective sections of the simulation
    this.playAreaNode.accessibleOrder = [ barMagnetNode ];
    this.controlAreaNode.accessibleOrder = [ controlPanel ];
  }

  exampleSim.register( 'ExampleScreenView', ExampleScreenView );

  return inherit( AccessibleScreenView, ExampleScreenView );
} );
