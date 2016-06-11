
// var xpub = {}
// var xpubc = [],
//     list = xpub.address.extkey_addresses,
//     trans = xpub.address.transactions,
//     runningtotal = 0,
//     time, Ltime, datapoint = [], feeTally = false;
//
// console.log("list lenght :", list.length)
// for (i=0; i < trans.length; i++) {
//
//   Ltime = trans[i].first_seen * 1000;
//   time = new Date(Ltime);
//   var LgenTime = datapoint[0] - 86400000;
//   if (i === 0) { // most recent transaction
//     var genTime = new Date(LgenTime)
//     var genData = [genTime, 0]
//     xpubc.push(genData)
//     console.log("datapoint===========> ", datapoint)
//     for (j=0; j < trans[i].inputs.length; j++) {
//       var btcOUT = trans[i].inputs[j].value_int;
//       for (jj=0; jj < list.length; jj++) {
//         if (list[jj] === trans[i].inputs[j].addresses[0]) {
//           runningtotal = runningtotal - btcOUT;
//           if(!feeTally) {
//             console.log("fee Event before: ", runningtotal / 100000000)
//             runningtotal = runningtotal - trans[i].fee_int;
//             console.log("fee Event after: ", runningtotal / 100000000)
//             feeTally = true;
//           }
//           console.log("matchOUT! -", btcOUT / 100000000)
//         }
//       }
//     }
//     feeTally = false;
//     for (k=0; k < trans[i].outputs.length; k++) {
//       var btcIN = trans[i].outputs[k].value_int;
//       for (kk=0; kk < list.length; kk++) {
//         if (list[kk] === trans[i].outputs[k].addresses[0]) {
//           runningtotal = runningtotal + btcIN
//           console.log("matchIN! +", btcIN / 100000000)
//
//         }
//       }
//     }
//
//   } else { // all other transaction
//     datapoint = [time, (runningtotal / 100000000)];
//     xpubc.push(datapoint)
//     console.log("datapoint===========> ", datapoint)
//     // match transaction against extkey_addresses
//     for (j=0; j < trans[i].inputs.length; j++) {
//       var btcOUT = trans[i].inputs[j].value_int;
//       for (jj=0; jj < list.length; jj++) {
//         if (list[jj] === trans[i].inputs[j].addresses[0]) {
//           console.log("matchOUT! -", btcOUT / 100000000)
//           runningtotal = runningtotal - btcOUT
//           if(!feeTally) {
//             console.log("fee Event before: ", runningtotal / 100000000)
//             runningtotal = runningtotal - trans[i].fee_int;
//             console.log("fee Event before: ", runningtotal / 100000000)
//             feeTally = true;
//           }
//         }
//       }
//     }
//     feeTally = false;
//     for (k=0; k < trans[i].outputs.length; k++) {
//       var btcIN = trans[i].outputs[k].value_int;
//       for (kk=0; kk < list.length; kk++) {
//         if (list[kk] === trans[i].outputs[k].addresses[0]) {
//           console.log("matchIN! +", btcIN / 100000000)
//
//           runningtotal = runningtotal + btcIN
//         }
//       }
//     }
//
// }
// }
// datapoint = [time, (runningtotal / 100000000)];
// xpubc.push(datapoint);

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
      var data = new google.visualization.DataTable();



      // data.addColumn('date', 'X');
      data.addColumn('number', 'X');
      data.addColumn('number', 'BTC');

      data.addRows([[1,1], [2,2], [3,3], [4,4]]);
      // data.addRows(xpubc);




      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Total Unspent BTC'
        },
        backgroundColor: '#f1f8e9'
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
