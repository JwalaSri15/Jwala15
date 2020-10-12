(function(){
    'use strict';
    angular.module("mainapp",[])
    .controller('CakeController',function($scope){
        $scope.name="";
        $scope.quantity="";
        $scope.Flavours="";
        $scope.Address="";
        $scope.total=0;
        $scope.cal=function(){
            var t=calTotal();
            $scope.total=t;
        }
        function calTotal(quantity){
            if($scope.quantity>0){
                return $scope.quantity*250
            }
        }
        
    });
    
})();