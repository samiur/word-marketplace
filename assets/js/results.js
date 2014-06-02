$(document).ready(function () {
  $.get( "data/words.json", function( data ) {
    var dynatable_data = _.values(data);
    var dynatable = $('#results-table').dynatable({
      dataset: {
        records: dynatable_data,
        perPageDefault: 50,
        sorts: ["Total+Count"]
      }
    }).data('dynatable');
    dynatable.sorts.clear();
    dynatable.sorts.add('Total Count', -1);
    dynatable.process();
  }, "json" );
});