angular.module('filters')
    .filter('dmslink', ['filters_functions',
        function( filters_functions ){
            return filters_functions.dmsLink;
        }    
    ]);