app.controller('firstpageController', ['$scope','$window','barF', function($scope,$window, barF) {

    $scope.user={};
    $scope.bars=barF.bars;
    
    $scope.search = function(){
        console.log("!search!");
        barF.getAllBars($scope.user.location);
    };

  
}]);