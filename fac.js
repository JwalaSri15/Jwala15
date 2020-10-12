(function () {
    'use strict';
    
    angular.module('ControllerAsApp', [])
    
    .controller('Cakelist2', Cakelist2)
    .factory('CakeListFactory', CakeListFactory);
    
    Cakelist2.$inject = ['CakeListFactory'];
    function Cakelist2(CakeListFactory) {
      var list2 = this;
    
      var CakeList = CakeListFactory(10);
    
      list2.items = CakeList.getItems();
    
     
      list2.cakename= "";
    
      list2.add = function () {
        try {
          CakeList.add(list2.cakename);
        } catch (error) {
          list2.errorMessage = error.message;
        }
    
      }
    
      list2.remove = function (itemIndex) {
        CakeList.remove(itemIndex);
      };
    }
    
    
    function CakeListService(maxItems) {
      var service = this;
    
 
      var items = [];
    
      service.add = function (cakename) {
        if ((maxItems === undefined) ||
            (maxItems !== undefined) && (items.length < maxItems)) {
          var item = {
           
            cakename: cakename
          };
          items.push(item);
        }
        else {
          throw new Error("Max items (" + maxItems + ") reached.");
        }
      };
    
      service.remove = function (itemIndex) {
        items.splice(itemIndex, 1);
      };
    
      service.getItems = function () {
        return items;
      };
    }
    
    
    function CakeListFactory() {
      var factory = function (maxItems) {
        return new CakeListService(maxItems);
      };
    
      return factory;
    }
    
    })();
    