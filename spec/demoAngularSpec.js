describe('demoAngularUnitTest', function() {

  // load the angular module
  beforeEach(module('demoApp'));

  describe('controller test', function() {

      var $scope, $controller, demoAppCtl;

      // inject angular directive
      beforeEach(inject(function(_$rootScope_, _$controller_) {
          var rootScope = _$rootScope_;
          $scope = rootScope.$new();
          $controller = _$controller_;

          // $controller('コントローラ名', { injectしているDirective: jasmine内で定義したDirective変数名} )
          demoAppCtl = $controller('demoAppCtl', { $scope: $scope });
      }));

      it('$scope パラメータ テスト', function() {
          expect($scope.name).toEqual("angular-unit-test");
      });

      it('demoFunction テスト', function() {
          expect( $scope.demoFunction(3) ).toEqual(9);
      });
  });

  describe('filter test', function() {

      var $filter, numberCustomFilter;

      beforeEach(inject(function(_$filter_) {
          $filter = _$filter_;
          numberCustomFilter = $filter('numberCustomFilter', { $filter: $filter} );
      }));

      it('引数が 0 の場合', function() {
          expect(numberCustomFilter(0)).toEqual('0');
      });

      it('引数が 百 の場合', function() {
          expect(numberCustomFilter(100)).toEqual('100');
      });

      it('引数が 千 の場合', function() {
          expect(numberCustomFilter(1000)).toEqual('1,000');
      });

      it('引数が 万 の場合', function() {
          expect( numberCustomFilter(1000000) ).toEqual('1,000,000');
      });

      it('引数が Nullの場合', function() {
          expect(numberCustomFilter(null)).toEqual('-');
      });

      it('引数が マイナス の場合', function() {
          expect(numberCustomFilter(-1000)).toEqual('-');
      });
  });

});
