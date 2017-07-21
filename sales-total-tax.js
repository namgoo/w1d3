// implement a function that calculates the total sales and total tax,
// grouped by company.

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/


function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = {};
  var addSales = 0;
  var addTax = 0;
  // var totalSales = 0;
  // var totalTaxes = 0;
  console.log(taxRates)
  salesData.forEach(function (salesData) {
    for (j = 0; j < salesData.sales.length; j++) {
       addSales += salesData.sales[j]
    }
    salesData['addSales'] = addSales
    addSales = 0

    pr = (salesData.province)

    addTax = (taxRates[pr] * salesData['addSales'])
    salesData['addTax'] = addTax
  })

  console.log("salesData: ", salesData)

  salesData.forEach(function (salesData) {
      if (!result[salesData['name']]){
        result[salesData['name']] = { totalSales: 0 , totalTaxes: 0}
      }
  })
  console.log("result", result)

  // salesData.forEach(function (salesData) {

  var keys = Object.keys(result)
  console.log(keys)
  for (var m = 0; m < keys.length; m++) {
    for (var n = 0; n < salesData.length; n++) {
      if (salesData[n]['name'] === keys[m]) {
        console.log("keys[m]" , keys[m])
        console.log("salesData[n]['addSales']" , salesData[n]['addSales'])
        console.log("salesData[n]['addTax']" , salesData[n]['addTax'])

        result[keys[m]].totalSales += salesData[n]['addSales']
        result[keys[m]].totalTaxes += salesData[n]['addTax']

        // result[keys[m]] = {'totalSales': totalSales , 'totalTaxes' : totalTaxes }
      }

      console.log("result during each loop", result)
    }
  }


}

 console.log(calculateSalesTax(companySalesData, salesTaxRates));














// sum = 0
// company = []

// for (var i = 0; i < companySalesData.length; i ++) {
//     if (companySalesData[i]['name'])
//     company.push(companySalesData[i]['name'])

// console.log(company)
//     for (var j = 0; j < companySalesData[i]['sales'].length; j ++)
//     sum = companySalesData[i]['sales'][j]


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/








