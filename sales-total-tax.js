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



function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
}

var results = calculateSalesTax(companySalesData, salesTaxRates);




// sum = 0
company = []

for (var i = 0; i < companySalesData.length; i ++) {
    if (companySalesData[i]['name'])
    company.push(companySalesData[i]['name'])

console.log(company)
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


