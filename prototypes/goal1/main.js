// main.js
// -------
//
// This is just a simple example to get everything started.
$(document).ready(function() {
  // This is where everything should go.
  var canvas = $('#test-canvas')[0];
  
  var renderer = new Vex.Flow.Renderer(canvas,
    Vex.Flow.Renderer.Backends.CANVAS);
  
  var ctx = renderer.getContext();
  var stave = new Vex.Flow.Stave(10, 0, 500);
  stave.addClef("treble").setContext(ctx).draw();
});
