// ACM2016 example code
var year = 2014; // the year to be mapping
var center = ee.Geometry.Point([2.3212, 36.2099]); // map center

// something bug with union()
// var zones = ee.FeatureCollection("ft:1fGODObRcgWotUauiKV_2GlM7ZXX0sdZ5FLTJeALZ");
// var union = ee.FeatureCollection(ee.List([1,2,3,4,5,6,7,8]).map(function(i) {
//   i = ee.Number(i).int();
//   var temp = zones.filter(ee.Filter.eq('region', 2));
//   return temp.union();
// }));
// Map.addLayer(ee.Image(0).byte().paint(ee.FeatureCollection(union.first())))
// Map.addLayer(ee.FeatureCollection(union.first()));

var zones = ee.FeatureCollection("ft:19hZjN8dbwPbDHNdLVaoGLEtmIbxAtrn4yDr9QVgt");

var treeString = ee.List([null, 
// zone 1
"1) root 5111 3300 0 (0.35 0.0029 0.098 0.19 0.13 0.21 0.0033 0.014)  \
  2) B4>=60.5 1750  229 0 (0.87 0.00057 0.041 0.0011 0.043 0.045 0 0.00057) *\
  3) B4< 60.5 3361 2349 0 (0.086 0.0042 0.13 0.28 0.17 0.3 0.0051 0.021)  \
    6) B4>=17.5 2607 1701 0 (0.11 0.0054 0.16 0.15 0.21 0.35 0.0065 0.013)  \
      12) B4>=29.5 1325  858 0 (0.2 0.0091 0.22 0.047 0.16 0.35 0.011 0.0083)  \
        24) B5>=76.5 419  248 1 (0.095 0.0024 0.41 0.036 0.14 0.31 0.0072 0.0024) *\
        25) B5< 76.5 906  567 0 (0.24 0.012 0.13 0.052 0.16 0.37 0.012 0.011)  \
          50) B3>=37.5 205   85 0 (0.59 0.015 0.059 0.02 0.11 0.18 0.02 0.015) *\
          51) B3< 37.5 701  399 0 (0.14 0.011 0.16 0.061 0.18 0.43 0.01 0.01) *\
      13) B4< 29.5 1282  843 0 (0.023 0.0016 0.094 0.26 0.26 0.34 0.0023 0.018) *\
    7) B4< 17.5 754  202 0 (0.0013 0 0.017 0.73 0.06 0.14 0 0.049) *",
// zone 2
"1) root 5111 3300 0 (0.35 0.0029 0.098 0.19 0.13 0.21 0.0033 0.014)  \
  2) B4>=60.5 1750  229 0 (0.87 0.00057 0.041 0.0011 0.043 0.045 0 0.00057) *\
  3) B4< 60.5 3361 2349 0 (0.086 0.0042 0.13 0.28 0.17 0.3 0.0051 0.021)  \
    6) B4>=17.5 2607 1701 0 (0.11 0.0054 0.16 0.15 0.21 0.35 0.0065 0.013)  \
      12) B4>=29.5 1325  858 0 (0.2 0.0091 0.22 0.047 0.16 0.35 0.011 0.0083)  \
        24) B5>=76.5 419  248 1 (0.095 0.0024 0.41 0.036 0.14 0.31 0.0072 0.0024) *\
        25) B5< 76.5 906  567 0 (0.24 0.012 0.13 0.052 0.16 0.37 0.012 0.011)  \
          50) B3>=37.5 205   85 0 (0.59 0.015 0.059 0.02 0.11 0.18 0.02 0.015) *\
          51) B3< 37.5 701  399 0 (0.14 0.011 0.16 0.061 0.18 0.43 0.01 0.01) *\
      13) B4< 29.5 1282  843 0 (0.023 0.0016 0.094 0.26 0.26 0.34 0.0023 0.018) *\
    7) B4< 17.5 754  202 0 (0.0013 0 0.017 0.73 0.06 0.14 0 0.049) *",
"1) root 5111 3300 0 (0.35 0.0029 0.098 0.19 0.13 0.21 0.0033 0.014)  \
  2) B4>=60.5 1750  229 0 (0.87 0.00057 0.041 0.0011 0.043 0.045 0 0.00057) *\
  3) B4< 60.5 3361 2349 0 (0.086 0.0042 0.13 0.28 0.17 0.3 0.0051 0.021)  \
    6) B4>=17.5 2607 1701 0 (0.11 0.0054 0.16 0.15 0.21 0.35 0.0065 0.013)  \
      12) B4>=29.5 1325  858 0 (0.2 0.0091 0.22 0.047 0.16 0.35 0.011 0.0083)  \
        24) B5>=76.5 419  248 1 (0.095 0.0024 0.41 0.036 0.14 0.31 0.0072 0.0024) *\
        25) B5< 76.5 906  567 0 (0.24 0.012 0.13 0.052 0.16 0.37 0.012 0.011)  \
          50) B3>=37.5 205   85 0 (0.59 0.015 0.059 0.02 0.11 0.18 0.02 0.015) *\
          51) B3< 37.5 701  399 0 (0.14 0.011 0.16 0.061 0.18 0.43 0.01 0.01) *\
      13) B4< 29.5 1282  843 0 (0.023 0.0016 0.094 0.26 0.26 0.34 0.0023 0.018) *\
    7) B4< 17.5 754  202 0 (0.0013 0 0.017 0.73 0.06 0.14 0 0.049) *",
"1) root 5111 3300 0 (0.35 0.0029 0.098 0.19 0.13 0.21 0.0033 0.014)  \
  2) B4>=60.5 1750  229 0 (0.87 0.00057 0.041 0.0011 0.043 0.045 0 0.00057) *\
  3) B4< 60.5 3361 2349 0 (0.086 0.0042 0.13 0.28 0.17 0.3 0.0051 0.021)  \
    6) B4>=17.5 2607 1701 0 (0.11 0.0054 0.16 0.15 0.21 0.35 0.0065 0.013)  \
      12) B4>=29.5 1325  858 0 (0.2 0.0091 0.22 0.047 0.16 0.35 0.011 0.0083)  \
        24) B5>=76.5 419  248 1 (0.095 0.0024 0.41 0.036 0.14 0.31 0.0072 0.0024) *\
        25) B5< 76.5 906  567 0 (0.24 0.012 0.13 0.052 0.16 0.37 0.012 0.011)  \
          50) B3>=37.5 205   85 0 (0.59 0.015 0.059 0.02 0.11 0.18 0.02 0.015) *\
          51) B3< 37.5 701  399 0 (0.14 0.011 0.16 0.061 0.18 0.43 0.01 0.01) *\
      13) B4< 29.5 1282  843 0 (0.023 0.0016 0.094 0.26 0.26 0.34 0.0023 0.018) *\
    7) B4< 17.5 754  202 0 (0.0013 0 0.017 0.73 0.06 0.14 0 0.049) *",
"1) root 5111 3300 0 (0.35 0.0029 0.098 0.19 0.13 0.21 0.0033 0.014)  \
  2) B4>=60.5 1750  229 0 (0.87 0.00057 0.041 0.0011 0.043 0.045 0 0.00057) *\
  3) B4< 60.5 3361 2349 0 (0.086 0.0042 0.13 0.28 0.17 0.3 0.0051 0.021)  \
    6) B4>=17.5 2607 1701 0 (0.11 0.0054 0.16 0.15 0.21 0.35 0.0065 0.013)  \
      12) B4>=29.5 1325  858 0 (0.2 0.0091 0.22 0.047 0.16 0.35 0.011 0.0083)  \
        24) B5>=76.5 419  248 1 (0.095 0.0024 0.41 0.036 0.14 0.31 0.0072 0.0024) *\
        25) B5< 76.5 906  567 0 (0.24 0.012 0.13 0.052 0.16 0.37 0.012 0.011)  \
          50) B3>=37.5 205   85 0 (0.59 0.015 0.059 0.02 0.11 0.18 0.02 0.015) *\
          51) B3< 37.5 701  399 0 (0.14 0.011 0.16 0.061 0.18 0.43 0.01 0.01) *\
      13) B4< 29.5 1282  843 0 (0.023 0.0016 0.094 0.26 0.26 0.34 0.0023 0.018) *\
    7) B4< 17.5 754  202 0 (0.0013 0 0.017 0.73 0.06 0.14 0 0.049) *"
]);


var run_acm2016 = function(year) {
  var lists = ee.ImageCollection('MODIS/MYD13Q1').select('NDVI')
  .filterDate(year.toString().concat('-01-01'),year.toString().concat('-12-31'))
  .sort('system:index', true).toList(23);
  var images = ee.Image(lists.slice(1).iterate(function(a, b) {return ee.Image(b).addBands(a);}, lists.get(0)));  
  
  
  var results = ee.ImageCollection(ee.List([1,2,3,4,5,6,7,8]).map(function(i){
     i = ee.Number(i).int();
    var zone = zones.filter(ee.Filter.eq('region', i)).union();
    var mask = ee.Image(0).byte().paint(zone, 1);
//        var mask = ee.Image().byte().paint(f,  1);
    var tree = ee.String(treeString.get(i));
    // run algorith for zone number
    var classifier = ee.Classifier.decisionTree(tree);
    var classified = images.classify(classifier);  
    return classified.byte().updateMask(mask);
    // return ee.Image(i).byte().updateMask(mask);
  })).mosaic();


  return results;
};

var result = run_acm2016(year);
Map.addLayer(result, {min:1, max:8}, 'ACM-'+year.toString());
Map.centerObject(center, 9);
