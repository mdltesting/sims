// Copyright 2002-2012, University of Colorado

/**
 * Control panel.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';
  var controlPanelTemplate = require( 'tpl!../../html/control-panel.html' );

  function ControlPanel() {
  }

  /*
   * Takes an HTML fragment that describes a control panel with DOM widgets,
   * internationalizes it, and wires up the DOM widgets.
   *
   * @param strings internationalized strings
   * @param {ExampleSimModel} model
   * @param {ExampleSimView} view
   */
  ControlPanel.init = function( strings, model, view ) {

    // Translate the HTML template.
    var controlPanelFragment = controlPanelTemplate( {
      showPerformanceMonitor: strings.showPerformanceMonitor,
      flipPolarity: strings.flipPolarity,
      resetAll: strings.resetAll
    } );

    // Add the HTML template to the DOM.
    $( '#control-panel-div' ).append( $( controlPanelFragment ) ).trigger( 'create' );

    // Wire up DOM components.
    {
      // 'Show Frame Rate' check box toggles visibility.
      var handlePerformanceMonitorButtonClick = function() {
        model.performanceMonitorVisible = !model.performanceMonitorVisible;
      };
      var $performanceMonitorCheckBox = $( '#showPerformanceMonitorCheckBox' );
      $performanceMonitorCheckBox.bind( 'touchstart', handlePerformanceMonitorButtonClick );
      $performanceMonitorCheckBox.bind( 'click', handlePerformanceMonitorButtonClick );

      model.link( 'performanceMonitorVisible', function( model, checked ) {
        var $icon = $( '#showPerformanceMonitorCheckBox i' );
        $icon.removeClass( 'icon-check-empty' ).removeClass( 'icon-check' );
        $icon.addClass( checked ? 'icon-check' : 'icon-check-empty' );
      } );

      // 'Flip Polarity' button rotates magnet by 90 degrees.
      $( '#flipPolarityButton' ).bind( 'click', function() {
        model.barMagnet.orientation = model.barMagnet.orientation + Math.PI;
      } );

      // 'Reset All' button returns sim to initial state.
      // No need to reset the view here, it should be driven completely off of the model
      $( '#resetAllButton' ).bind( 'click', model.reset.bind( model ) );
    }
  };

  return ControlPanel;
} );
