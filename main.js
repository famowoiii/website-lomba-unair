// // // main.js

// const StyleFeature = function (feature) {
//   // Mendapatkan nilai properti 'NAMOBJ', 'WADMKC', dan 'WADMKK'
//   const myKelurahan = feature.get("NAMOBJ");
//   const myKecamatan = feature.get("WADMKC");
//   const myKota = feature.get("WADMKK");

//   // Memanggil fungsi namaDesa untuk menampilkan nilai properti
//   namaDesa(myKelurahan, myKecamatan, myKota);

//   return new ol.style.Style({
//     fill: new ol.style.Fill({
//       color: "aqua",
//     }),
//     stroke: new ol.style.Stroke({
//       color: "red",
//     }),
//   });
// };

// const namaDesa = (kelurahan, kecamatan, kota) => {
//   console.log({
//     KELURAHAN: kelurahan,
//     KECAMATAN: kecamatan,
//     KOTA: kota,
//   });
// };

// // Pemanggilan API OpenLayers
// var myView = new ol.View({
//   center: ol.proj.fromLonLat([112.745596, -7.263907]),
//   zoom: 8.5,
// });

// var myLayer = new ol.layer.Tile({
//   source: new ol.source.OSM(),
// });

// var layer = [myLayer];
// var map = new ol.Map({
//   target: "map",
//   layers: layer,
//   view: myView,
// });

// // Objek lapisan vektor surabaya dengan penggunaan StyleFeature sebagai gaya vektor
// const surabaya = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     url: "ADMINISTRASIDESA_AR_25K_Feat.json",
//     format: new ol.format.GeoJSON(),
//   }),
//   style: StyleFeature, // Menggunakan StyleFeature sebagai gaya vektor
// });

// map.addLayer(surabaya);

// const StyleFeature = function (feature) {
//   // Mendapatkan nilai properti 'NAMOBJ', 'WADMKC', dan 'WADMKK'
//   const myKelurahan = feature.get("NAMOBJ");
//   const myKecamatan = feature.get("WADMKC");
//   const myKota = feature.get("WADMKK");

//   // Memanggil fungsi namaDesa untuk menampilkan nilai properti
//   namaDesa(myKelurahan, myKecamatan, myKota);

//   return new ol.style.Style({
//     fill: new ol.style.Fill({
//       color: "aqua",
//     }),
//     stroke: new ol.style.Stroke({
//       color: "red",
//     }),
//   });
// };

// const namaDesa = (kelurahan, kecamatan, kota) => {
//   console.log({
//     KELURAHAN: kelurahan,
//     KECAMATAN: kecamatan,
//     KOTA: kota,
//   });
// };

// // Pemanggilan API OpenLayers
// var myView = new ol.View({
//   center: ol.proj.fromLonLat([112.745596, -7.263907]),
//   zoom: 8.5,
// });

// var myLayer = new ol.layer.Tile({
//   source: new ol.source.OSM(),
// });

// var layer = [myLayer];
// var map = new ol.Map({
//   target: "map",
//   layers: layer,
//   view: myView,
// });

// // Objek lapisan vektor surabaya dengan penggunaan StyleFeature sebagai gaya vektor
// const surabaya = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     url: "ADMINISTRASIDESA_AR_25K_Feat.json",
//     format: new ol.format.GeoJSON(),
//   }),
//   style: StyleFeature, // Menggunakan StyleFeature sebagai gaya vektor
// });

// map.addLayer(surabaya);

// // Tambahkan event handler untuk peristiwa "pointermove" pada peta
// map.on("pointermove", function (event) {
//   // Dapatkan pixel koordinat dari peristiwa pointermove
//   const pixel = event.pixel;

//   // Dapatkan fitur di bawah kursor mouse
//   const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
//     return feature;
//   });

//   // Jika ada fitur di bawah kursor, tampilkan data namaDesa di console
//   if (feature) {
//     const myKelurahan = feature.get("NAMOBJ");
//     const myKecamatan = feature.get("WADMKC");
//     const myKota = feature.get("WADMKK");
//     console.log({
//       KELURAHAN: myKelurahan,
//       KECAMATAN: myKecamatan,
//       KOTA: myKota,
//     });
//   }
// });

//

// const StyleFeature = function (feature) {
//   const myKelurahan = feature.get("NAMOBJ");
//   const myKecamatan = feature.get("WADMKC");
//   const myKota = feature.get("WADMKK");

//   return new ol.style.Style({
//     fill: new ol.style.Fill({
//       color: "aqua",
//     }),
//     stroke: new ol.style.Stroke({
//       color: "red",
//     }),
//   });
// };

// var myView = new ol.View({
//   center: ol.proj.fromLonLat([112.745596, -7.263907]),
//   zoom: 8.5,
// });

// var myLayer = new ol.layer.Tile({
//   source: new ol.source.OSM(),
// });

// var layer = [myLayer];
// var map = new ol.Map({
//   target: "map",
//   layers: layer,
//   view: myView,
// });

// const surabaya = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     url: "ADMINISTRASIDESA_AR_25K_Feat.json",
//     format: new ol.format.GeoJSON(),
//   }),
//   style: StyleFeature,
// });

// map.addLayer(surabaya);

// map.on("click", function (event) {
//   const pixel = event.pixel;
//   const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
//     return feature;
//   });

//   if (feature) {
//     const myKelurahan = feature.get("NAMOBJ");
//     const myKecamatan = feature.get("WADMKC");
//     const myKota = feature.get("WADMKK");

//     // Fetch additional data from "file.json"
//     fetch("sheet001.json")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const aveGridcode = data.find(
//           (obj) => obj.NAMOBJ === myKelurahan
//         ).Ave_gridcode;

//         console.log({
//           KELURAHAN: myKelurahan,
//           KECAMATAN: myKecamatan,
//           KOTA: myKota,
//           AVE_GRIDCODE: aveGridcode,
//         });
//       })
//       .catch((error) => {
//         console.error("Terjadi kesalahan saat mengambil data:", error);
//       });
//   }
// });

const StyleFeature = function (feature) {
  const myKelurahan = feature.get("NAMOBJ");
  const myKecamatan = feature.get("WADMKC");
  const myKota = feature.get("WADMKK");
  const aveGridcode = feature.get("Ave_gridcode");

  // Set the default style
  const defaultStyle = new ol.style.Style({
    fill: new ol.style.Fill({
      color: "aqua",
    }),
    stroke: new ol.style.Stroke({
      color: "red",
    }),
  });

  // Define styles for different "Ave_gridcode" values
  const greenStyle = new ol.style.Style({
    fill: new ol.style.Fill({
      color: "green",
    }),
    stroke: new ol.style.Stroke({
      color: "red",
    }),
  });

  const yellowStyle = new ol.style.Style({
    fill: new ol.style.Fill({
      color: "rgba(0, 128, 0, 0.7)",
    }),
    stroke: new ol.style.Stroke({
      color: "aqua",
    }),
  });

  // Determine the style based on "Ave_gridcode" value
  let selectedStyle;
  if (aveGridcode < 1.5) {
    selectedStyle = greenStyle;
  } else {
    selectedStyle = yellowStyle;
  }

  return selectedStyle || defaultStyle;
};

var myView = new ol.View({
  center: ol.proj.fromLonLat([112.745596, -7.263907]),
  zoom: 11.5,
});

var myLayer = new ol.layer.Tile({
  source: new ol.source.OSM(),
});

var layer = [myLayer];
var map = new ol.Map({
  target: "map",
  layers: layer,
  view: myView,
});

const surabaya = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: "ADMINISTRASIDESA_AR_25K_Feat.json",
    format: new ol.format.GeoJSON(),
  }),
  style: StyleFeature,
});

map.addLayer(surabaya);

map.on("click", function (event) {
  const pixel = event.pixel;
  const feature = map.forEachFeatureAtPixel(pixel, function (feature) {
    return feature;
  });

  if (feature) {
    const myKelurahan = feature.get("NAMOBJ");
    const myKecamatan = feature.get("WADMKC");
    const myKota = feature.get("WADMKK");

    // Fetch additional data from "sheet001.json"
    fetch("sheet001.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const aveGridcode = data.find(
          (obj) => obj.NAMOBJ === myKelurahan
        ).Ave_gridcode;
        const conclusion = function () {
          if (aveGridcode <= 1.5) {
            return "aman";
          } else if (aveGridcode <= 3) {
            return "sedang";
          } else {
            return "bahaya";
          }
        };
        const dataFinal = {
          KELURAHAN: myKelurahan,
          KECAMATAN: myKecamatan,
          KOTA: myKota,
          AVE_GRIDCODE: conclusion(),
        };

        console.log(dataFinal);

        function finishing(dataFinal) {
          let kecamatan = document.getElementById("1");
          let kelurahan = document.getElementById("2");
          let tingkat = document.getElementById("3");
          return (
            (kecamatan.innerHTML = dataFinal.KECAMATAN),
            (kelurahan.innerHTML = dataFinal.KELURAHAN),
            (tingkat.innerHTML = dataFinal.AVE_GRIDCODE)
          );
        }

        finishing(dataFinal);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data:", error);
      });
  }
});
