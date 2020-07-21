
var app = angular.module("BlogApp", ['ngRoute', 'ngMaterial', 'ngMessages', 'angularUtils.directives.dirPagination']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {templateUrl: "views/index.html"})
    $routeProvider.when("/data", {templateUrl: "views/data.html"})
});

app.controller('mainController', function ($scope, $location, $mdSidenav) {

    $scope.ShowBankDetails = true;
    $scope.loanstatus = " ";
    $scope.cmastatus = " ";

    $scope.alldata = [
        {
            id: '5de4f7e12bbd241008485ab3',
            name: 'Joe Doe',
            date: 'Nov 14, 2019',
            price: 40000,
            loan_status: 'PENDING',
            appointment_status: 'SUCCESSFUL',
        },
        {
            id: '5de765632bbd241008485abe',
            name: 'Harshala pawar',
            date: 'Dec 10, 2019',
            price: 40000,
            loan_status: 'PENDING',
            appointment_status: 'SUCCESSFUL',
        },
        {
            id: '5de765632bbd241008485a17',
            name: 'Harshala pawar',
            date: 'Jan 04, 2020',
            price: 40000,
            loan_status: 'COMPLETED',
            appointment_status: 'SUCCESSFUL',
        },
        {
            id: '5de765632bbd241008485a21',
            name: 'Ram Prasad',
            date: 'May 23, 2020',
            price: 24000,
            loan_status: 'PENDING',
            appointment_status: 'FAILED',
        },
        {
            id: '5de765632bbd241008485ab5',
            name: 'Harshala pawar',
            date: 'Sep 25, 2019',
            price: 40000,
            loan_status: 'COMPLETED',
            appointment_status: 'SUCCESSFUL',
        },
        {
            id: '5de765632bbd241008485a23',
            name: 'Harshala pawar',
            date: 'Oct 15, 2019',
            price: 40000,
            loan_status: 'PENDING',
            appointment_status: 'FAILED',
        },
        {
            id: '5de4f7e12bbd241008485a77',
            name: 'Gopi Krishna',
            date: 'Nov 16, 2019',
            price: 25000,
            loan_status: 'COMPLETED',
            appointment_status: 'SUCCESSFUL',
        },
        {
            id: '5de765632bbd241008485a89',
            name: 'Karan Patil',
            date: 'Jan 23, 2020',
            price: 32000,
            loan_status: 'PENDING',
            appointment_status: 'SUCCESSFUL',
        },
        {
            id: '5de765632bbd241008485ab9',
            name: 'Prayag Bansode',
            date: 'Nov 14, 2019',
            price: 90000,
            loan_status: 'PENDING',
            appointment_status: 'SUCCESSFUL',
        },
        {
            id: '5de765632bbd241008485a65',
            name: 'Sai Prasad',
            date: 'Sep 10, 2019',
            price: 45000,
            loan_status: 'COMPLETED',
            appointment_status: 'FAILED',
        },
        {
            id: '5de765632bbd241008485a11',
            name: 'Megha Datte',
            date: 'Dec 19, 2019',
            price: 74000,
            loan_status: 'PENDING',
            appointment_status: 'SUCCESSFUL',
        },
        {
            id: '5de765632bbd241008485a23',
            name: 'Ramchandra Iyer',
            date: 'Feb 15, 2020',
            price: 78000,
            loan_status: 'PENDING',
            appointment_status: 'FAILED',
        }
    ];
        
//    Submit
    $scope.submit = function () {
        $location.path('/data');
    }

//    Sidenav
    $scope.toggleLeft = buildToggler('left');
    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }

//    Print
    $scope.printtable = function () {
        var divToPrint=document.getElementById("exportable");
   newWin= window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
    }

//    Download PDF
    $scope.downloadPdf = function () {
        pdfMake.createPdf(docDefinition).download();
    };


    var docDefinition = {
        content: [
            {
                text: 'Whrl Loan Applications'
            },
            {
                style: 'demoTable',
                table: {
                    widths: ['*', '*', '*','*', '*', '*'],
                    body: [
                        [{text: 'Application ID', style: 'header'},
                            {text: 'Name of Farmer', style: 'header'},
                            {text: 'Loan Application Date', style: 'header'},
                            {text: 'Transaction Price', style: 'header'},
                            {text: 'Loan Application Status', style: 'header'},
                            {text: 'CMA Application Status', style: 'header'},
                        ],                                                                       
                        ['5de4f7e12bbd241008485ab3', 'Joe Doe', 'Nov 14, 2019', '40000', 'PENDING', 'SUCCESSFUL'],
                        ['5de765632bbd241008485abe', 'Harshala pawar', 'Dec 10, 2019', '40000', 'PENDING', 'SUCCESSFUL'],
                        ['5de765632bbd241008485a17', 'Harshala pawar', 'Jan 04, 2020', '40000', 'COMPLETED', 'SUCCESSFUL'],
                        ['5de765632bbd241008485a21', 'Ram Prasad', 'May 23, 2020', '24000', 'PENDING', 'FAILED'],
                        ['5de765632bbd241008485ab5', 'Harshala pawar', 'Sep 25, 2019', '40000', 'COMPLETED', 'SUCCESSFUL'],
                        ['5de765632bbd241008485a23', 'Harshala pawar', 'Oct 15, 2019', '40000', 'PENDING', 'FAILED'],
                        ['5de4f7e12bbd241008485a77', 'Gopi Krishna', 'Nov 16, 2019', '25000', 'COMPLETED', 'SUCCESSFUL'],
                        ['5de765632bbd241008485a89', 'Karan Patil', 'Jan 23, 2020', '32000', 'PENDING', 'SUCCESSFUL'],
                        ['5de765632bbd241008485ab9', 'Prayag Bansode', 'Nov 14, 2019', '90000', 'PENDING', 'SUCCESSFUL'],
                        ['5de765632bbd241008485a65', 'Sai Prasad', 'Sep 10, 2019', '45000', 'COMPLETED', 'FAILED'],
                        ['5de765632bbd241008485a11', 'Megha Datte', 'Dec 19, 2019', '74000', 'PENDING', 'SUCCESSFUL'],
                        ['5de765632bbd241008485a23', 'Ramchandra Iyer', 'Feb 15, 2020', '78000', 'PENDING', 'FAILED'],
                    ]
                }
            }
        ],
        styles: {
            header: {
                bold: true,
                color: '#000',
                fontSize: 11
            },
            demoTable: {
                color: '#666',
                fontSize: 10
            }
        }
    };



//    Download Excel
    $scope.downloadexcel = function () {

        var createXLSLFormatObj = [];

        /* XLS Head Columns */
        var xlsHeader = ["Application ID", "Name of Farmer", "Loan Application Date", "Transaction Price", "Loan Application Status", "CMA Application Status"];

        /* XLS Rows Data */
        var xlsRows = $scope.alldata;

        createXLSLFormatObj.push(xlsHeader);
        $.each(xlsRows, function(index, value) {
            var innerRowData = [];
            $.each(value, function(ind, val) {
                innerRowData.push(val);
            });
            createXLSLFormatObj.push(innerRowData);
        });


        /* File Name */
        var filename = "LoanApplications.xlsx";

        /* Sheet Name */
        var ws_name = "Application1";

//        if (typeof console !== 'undefined') console.log(new Date());
        var wb = XLSX.utils.book_new(),
            ws = XLSX.utils.aoa_to_sheet(createXLSLFormatObj);

        /* Add worksheet to workbook */
        XLSX.utils.book_append_sheet(wb, ws, ws_name);

        /* Write workbook and Download */
        if (typeof console !== 'undefined') console.log(new Date());
        XLSX.writeFile(wb, filename);
        if (typeof console !== 'undefined') console.log(new Date());


    }


})
