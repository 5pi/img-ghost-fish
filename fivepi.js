var domain = 'https://fish.imgix.net'

function replace_image(match, src, alt) {
  var src = domain + src
  var widths = [ 150, 350, 500, 700, 900 ]
  srcset = widths.map((w) => src + '?w=' + w + ' ' + w + 'w').join(',')
  return '<img src="' + src + '?w=' + widths[0] + '" srcset="' + srcset + '" alt="' + alt + '">'
}

(function () {
  var fivepi = function () {
    return [{
      type: 'output',
			regex: '<img src="(?!https?:)(/[^"]*)" alt="([^"]*)" />', 
      replace: replace_image,
    }]
  }

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) {
    window.Showdown.extensions.fivepi = fivepi;
  }
  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = fivepi;
  }
}());
