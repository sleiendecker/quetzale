module.exports = function( grunt ) {

  // Base path
  var path = require( 'path' );
  var root = path.normalize( __dirname );

  grunt.initConfig({

    pkg: grunt.file.readJSON( 'package.json' ),
    
    /**
     * Bowercopy
     * Copies bower project dependencies into /js/lib directory.
     */

    bowercopy: {
      options: {
          runBower: false
          // Bower components folder will be removed afterwards
          // clean: true
      },
      libs: {
          options: {
              srcPrefix: 'bower_components',
              destPrefix: 'public/js/libs'
          },
          files: {
              'require.js': '/requirejs/require.js',
              'jquery.js': '/jquery/dist/jquery.js',
              'underscore.js': '/underscore-amd/underscore.js',
              'backbone.js': '/backbone-amd/backbone.js',
              'wreqr.js': '/backbone.wreqr/lib/backbone.wreqr.js',
              'babysitter.js': '/backbone.babysitter/lib/backbone.babysitter.js',
              'marionette.js': '/marionette/lib/core/amd/backbone.marionette.js',
              'async.js': '/async/lib/async.js',
              'jquery-ui.js': '/jquery-ui/ui/jquery-ui.js',
              'bootstrap.js': '/bootstrap/dist/js/bootstrap.js',
              'jasny-bootstrap.js': '/bootstrap-jasny/dist/extend/js/jasny-bootstrap.js',
              'jquery.bootstrap-growl.js': '/bootstrap-growl/jquery.bootstrap-growl.js',
              'bootstrap-datepicker.js': '/bootstrap-datepicker/js/bootstrap-datepicker.js',
              'bootstrap-timepicker.js': '/bootstrap-timepicker/js/bootstrap-timepicker.js',
              'datatables.js': '/datatables/media/js/jquery.dataTables.js',
              'datatables-tabletools.js': '/datatables-tabletools/js/dataTables.tableTools.js',
              'datatables-bootstrap3.js': '/datatables-bootstrap3/BS3/assets/js/datatables.js',
              'ZeroClipboard.js': '/datatables-tabletools/src/ZeroClipboard.js',
              'handlebars.js': '/handlebars/handlebars.js',
              'json2.js': '/json2/json2.js',
              'leafletDraw.js': '/leaflet.draw/src/Leaflet.draw.js',
              'leafletMarkerClusterer.js': '/leaflet.markerclusterer/dist/leaflet.markercluster.js',
              'text.js': '/requirejs-text/text.js',
              'sugar.js': '/sugar/release/sugar-full.development.js',
              'swag.js': '/swag/lib/swag.js',
              'validate.js': '/jquery-validation/dist/jquery.validate.js',
              'layout.js': '/jquery.layout/dist/jquery.layout-latest.js',
              'socketio.js': '/socket.io-client/socket.io.js',
              'respond.js': '/respond/respond.src.js',
              'html5shiv.js': '/html5shiv/dist/html5shiv.js',
              'modernizr.js': '/modernizr/modernizr.js',
              'fixedheader.js': '/fixedheader/js/FixedHeader.js',
              'fixedcolumns.js': '/datatables-fixedcolumns/js/dataTables.fixedColumns.js',
              'colvis.js': '/datatables-colvis/js/dataTables.colVis.js',
              'placeholders.jquery.js': '/placeholders/lib/adapters/placeholders.jquery.js',
              'placeholders.js': '/placeholders/lib/main.js',
              'placeholders-utils.js': '/placeholders/lib/utils.js'
          }
      },
      fonts: {
        options: {
          srcPrefix: 'bower_components',
          destPrefix: 'public/fonts'
        },
        files: {
          'fontawesome-webfont.eot': '/font-awesome/fonts/fontawesome-webfont.eot',
          'fontawesome-webfont.svg': '/font-awesome/fonts/fontawesome-webfont.svg',
          'fontawesome-webfont.ttf': '/font-awesome/fonts/fontawesome-webfont.ttf',
          'fontawesome-webfont.woff': '/font-awesome/fonts/fontawesome-webfont.woff',
          'fontAwesome.otf': '/font-awesome/fonts/fontAwesome.otf',
          'glyphicons-halflings-regular.eot': '/bootstrap/fonts/glyphicons-halflings-regular.eot',
          'glyphicons-halflings-regular.svg': '/bootstrap/fonts/glyphicons-halflings-regular.svg',
          'glyphicons-halflings-regular.ttf': '/bootstrap/fonts/glyphicons-halflings-regular.ttf',
          'glyphicons-halflings-regular.woff': '/bootstrap/fonts/glyphicons-halflings-regular.woff'
        }
      },
      css: {
        options: {
          srcPrefix: 'bower_components',
          destPrefix: 'public/css'
        },
        files: {
          'jquery.layout.css': '/jquery.layout/dist/layout-default-latest.css',
          'bootstrap.css': '/bootstrap/dist/css/bootstrap.css',
          'jasny-bootstrap.css': '/bootstrap-jasny/dist/css/bootstrap.css',
          'bootstrap-datepicker.css': '/bootstrap-datepicker/css/datepicker3.css',
          'bootstrap-timepicker.css': '/bootstrap-timepicker/css/bootstrap-timepicker.css',
          'datatables.css': '/datatables/media/css/jquery.dataTables.css',
          'datatables-bootstrap3.css': '/datatables-bootstrap3/BS3/assets/css/datatables.css',
          'datatables-tabletools.css': '/datatables-tabletools/css/dataTables.tableTools.css',
          'font-awesome.css': '/font-awesome/css/font-awesome.css',
          'leaflet.draw.css': '/leaflet.draw/dist/leaflet.draw.css',
          'leaflet.markerclusterer.css': '/leaflet.markerclusterer/dist/MarkerCluster.css',
          'leaflet.markerclusterer.default.css': '/leaflet.markerclusterer/dist/MarkerCluster.Default.css',
          'fixedcolumns.css': '/datatables-fixedcolumns/css/dataTables.fixedColumns.css',
          'colvis.css': '/datatables-colvis/css/dataTables.colVis.css',
          'colvis.jqueryui.css': '/datatables-colvis/css/dataTables.colvis.jqueryui.css'
        }
      },
      images: {
          options: {
            srcPrefix: 'bower_components',
            destPrefix: 'public/images'
          },
          files: {
            // Datatables
            'back_disabled.png': '/datatables/media/images/back_disabled.png',
            'back_enabled.png': '/datatables/media/images/back_enabled.png',
            'back_enabled_hover.png': '/datatables/media/images/back_enabled_hover.png',
            'forward_enabled.png': '/datatables/media/images/forward_enabled.png',
            'forward_disabled.png': '/datatables/media/images/forward_disabled.png',
            'forward_enabled_hover.png': '/datatables/media/images/forward_enabled_hover.png',
            'sort_asc.png': '/datatables/media/images/sort_asc.png',
            'sort_asc_disabled.png': '/datatables/media/images/sort_asc_disabled.png',
            'sort_both.png': '/datatables/media/images/sort_both.png',
            'sort_desc.png': '/datatables/media/images/sort_desc.png',
            'sort_desc_disabled.png': '/datatables/media/images/sort_desc_disabled.png',
            // Datatables - Tabletools
            'background.png': '/datatables-tabletools/images/background.png',
            'collection.png': '/datatables-tabletools/images/collection.png',
            'collection_hover.png': '/datatables-tabletools/images/collection_hover.png',
            'copy.png': '/datatables-tabletools/images/copy.png',
            'copy_hover.png': '/datatables-tabletools/images/copy_hover.png',
            'csv.png': '/datatables-tabletools/images/csv.png',
            'csv_hover.png': '/datatables-tabletools/images/csv_hover.png',
            'pdf.png': '/datatables-tabletools/images/pdf.png',
            'pdf_hover.png': '/datatables-tabletools/images/pdf_hover.png',
            'print.png': '/datatables-tabletools/images/print.png',
            'print_hover.png': '/datatables-tabletools/images/print_hover.png',
            'xls.png': '/datatables-tabletools/images/xls.png',
            'xls_hover.png': '/datatables-tabletools/images/xls_hover.png'
          }
      },
      map: {
        options: {
          srcPrefix: 'bower_components',
          destPrefix: 'public/css'
        },
        files: {
          'bootstrap.css.map': '/bootstrap/dist/css/bootstrap.css.map'
        }
      }
    },

    /**
     * CSS Minification and Concatenation
     */
    concat: {
      css: {
        src: ['public/css/bootstrap.css',
              'public/css/font-awesome.css',
              'public/css/datatables.css',
              'public/css/jasny-bootstrap.css',
              'public/css/datatables-tabletools.css',
              'public/css/layout-default-latest.css',
              // 'public/css/jquery.layout.css',
              // 'public/css/leaflet.css',
              'public/css/leaflet.markerclusterer.css',
              'public/css/leaflet.markerclusterer.default.css',
              'public/css/datepicker3.css',
              'public/css/bootstrap-listTree.css',
              'public/css/admin.css',
              'public/css/wall.css',
              'public/css/map.css',
              'public/css/ov-wizard.css'],
        dest: 'public/css/screen-concat.css'
      }
    },

    cssmin: {
      minify: {
        src: ['public/css/screen-concat.css'],
        dest: 'build/css/screen.css'
      }
    },

    // Coping uncat screen.css file for ie9 support.
    copy: {
      main: {
        src: 'public/css/screen.css',
        dest: 'build/css/screen-ie.css',
      },
    }

  });

  // Loading NPM Tasks
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-bowercopy' );
  grunt.loadNpmTasks( 'grunt-contrib-copy' );

  /**
   * Registering Tasks
   */

  // Initialize repo for build
  grunt.registerTask( 'create-reports-dir', function() {
      // Create temporary directory and .gitignore file.
      grunt.file.mkdir( root + "/build/reports" );
      grunt.file.write( root + "/build/reports/.gitignore", null );
      grunt.file.mkdir( root + "/build/uploads" );
      grunt.file.write( root + "/build/uploads/.gitignore", null );
      grunt.file.mkdir( root + "/build/floorplans" );
      grunt.file.write( root + "/build/floorplans/.gitignore", null );
  });
  
  // Default task.
  grunt.registerTask('default', [
    'bowercopy',
    'concat', 
    'cssmin',
    'create-reports-dir',
    'copy' 
    ]);
};