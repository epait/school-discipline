var orange = 
	{
		"district": "010",
		"name": "Orange",
		"school_year": "2012-2013",
		"sat_participation": 0.656,
		"sat_average_score": 1038,
		"expenses_per_pupil": 9745.94,
		"percent_needy": 0.419,
		"disciplinary": {"H": 9, "M": 15, "E": 2},
		"graduation_rate": 0.825,
		"freelunch_graduation_rate": 0.68,
		"demographic": {
		"percent_native_american": 0.004,
	    	"percent_asian": 0.007,
	    	"percent_black": 0.162,
	    	"percent_hispanic": 0.157,
	    	"percent_white": 0.637,
	    	"percent_pacific_islander": 0
		}
	};


    $(function () {
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
             tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '2012-2013 Short Term Suspensions by Race/Ethnicity',
            data: [
                {name: "Native American",   y: orange.demographic.percent_native_american*100, color: '#C19438'},
                {name: "Asian",       y: orange.demographic.percent_asian*100, color: '#004E79'},
                {name: "Black",       y: orange.demographic.percent_black*100, color: '#D16436'},
                {name: "Hispanic",    y: orange.demographic.percent_hispanic*100, color: '#BDAA91'},
                {name: "White",     y: orange.demographic.percent_white*100, color: '#88765D'},
                {name: "Pacific Islander",   y: orange.demographic.percent_pacific_islander*100, color: '#CE7352'}
            ]
        }]
    });
    });        
