/*
 * Real-time data generators for the example graphs in the documentation section.
 */
(function() {

    /*
     * Class for generating real-time data for the area, line, and bar plots.
     */
    var RealTimeData = function(layers) {
        this.layers = layers;
        this.index = 1;
        this.timestamp = ((new Date()).getTime() / 1000)|0;
    };

    RealTimeData.prototype.rand = function() {
        return parseInt(Math.random() * 100) + 50;
    };

    RealTimeData.prototype.history = function(entries) {
        if (typeof(entries) != 'number' || !entries) {
            entries = 1;
        }

        var history = [];

        for (var k = 0; k < this.layers; k++) {
            history.push({ values: [] });
        }

        instance = this;
        $.ajax({
          dataType: "json",
          async: false,
          data: {"index":"1"},
          type: "GET",
          contentType: "application/json",
          url: dataUrl,
          success: function(rows){

                // Creates an array of the price differences throughout the day
               for (var i = 0; i < entries; i++) {
                for (var j = 0; j < instance.layers; j++) {
                    history[j].values.push({time: instance.timestamp, y: rows[i]});
                }


                instance.timestamp++;
                //if(instance.index >= Object.keys(rows).length)
                 //   instance.index = 1;
                //else
                 //   instance.index++;
            }
            }
        });

        return history;
    };



    RealTimeData.prototype.next = function() {
        instance = this;
        var entry = [];
        $.ajax({
          dataType: "json",
          async: false,
          data: {"index":"1"},
          contentType: "application/json",
          type: "GET",
          url: dataUrl,
          success: function(rows){

                // Creates an array of the price differences throughout the day
                //$.each(rows, function(index, value){
                    entry.push({time: instance.timestamp, y: +rows["value"]});
                    instance.timestamp++;
                //});



                //if(instance.index >= Object.keys(rows).length)
                //    instance.index = 1;
                //else
                //    instance.index++;
            }
        });
        return entry;
    }


    window.RealTimeData = RealTimeData;

})();
