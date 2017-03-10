var GoogleSpreadsheet = require('google-spreadsheet');
var async = require('async');

// spreadsheet key is the long id in the sheets URL
var doc = new GoogleSpreadsheet('1HL9-FdslcDi84O98c2KYL0NAnaEPeimB9mHPDIq-EFo');
var sheet;

async.series([
  function getInfoAndWorksheets(step) {
    doc.getInfo(function(err, info) {
      console.log(err);
      console.log(info);
      step();
    });
  },
]);
