var assert = buster.referee.assert;
var refute = buster.referee.refute;

buster.testCase("Single wrapped ad", {
  prepare: function(done) {
    var that = this;
    VAST_VMAP_XHROptions.defaultVASTAbortLimit = 0
    queryVAST("./test/assets/vast_wrapper_linear_1.xml", function () {}, function (e) {
      that.e = e;
      done();
    });
  },

  "has error": function () {
    refute.isNull(this.e)
  },
  "has correct error message": function () {
    assert.equals(this.e.toString(), "Error: Reached abort limit of (" + 0 + ") wrappers.");
  },
  tearDown: function () {
    VAST_VMAP_XHROptions.defaultVASTAbortLimit = -1
  }

})
