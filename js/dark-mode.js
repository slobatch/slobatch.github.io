---
---

// Insert CSS
var css = document.getElementById("css-file");

css.href = "{{"/css/main.css" | prepend: site.baseurl }}"


// document.write('<link rel="stylesheet" href="{{"/css/main.css" | prepend: site.baseurl }}">');
