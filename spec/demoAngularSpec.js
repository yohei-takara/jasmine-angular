describe('demoAngularUnitTest', function() {

  var scope, ctrl;

  // load the angular module
  beforeEach(module('demoApp'));

  // inject angular directive
  beforeEach(inject(function(_$rootScope_, _$controller_, _$filter_) {
      var rootScope = _$rootScope_;
      scope = rootScope.$new();
      ctrl = _$controller_;
  }));

  describe('controller test', function() {
      it('ctrl name', function() {

          var controller = ctrl('demoAppCtl', { $scope: scope });

          expect(scope.name).toEqual("angular-unit-test");
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
