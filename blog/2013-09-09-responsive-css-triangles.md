---
slug: responsive-css-triangles
title: Responsive CSS triangles
author: Jose Vargas
author_url: https://github.com/josedvq
author_image_url: https://avatars0.githubusercontent.com/u/1315101?s=400&v=4
tags: [css, triangles, responsive]
---

Fixed width CSS triangles can be created easily by specifying two transparent borders and a colored border to a zero width and zero height element. Creating variable width triangles for responsive designs is not straightforward because CSS accepts border widths in pixels only. I came accross this issue recently while working on making my color picker plugin responsive.

I came up with a simple solution that uses <strong>two divs or one div and a pseudo-element</strong> to create responsive CSS triangles. Both consist of a large fixed width triangle that is covered/uncovered according to width, effectively faking responsiveness. Partially covering/uncovering the triangle makes it keep its proportions. 

Now, to the code. The following are up, down, right and left pointing CSS triangles. The code is presented for both the one and two div versions. The logic used is exactly the same for both. Using two divs makes these pure CSS triangles compatible with IE7, which does not support pseudo-elements. I set up a JSFiddle for playing around with the two-div triangles: <a href="http://jsfiddle.net/josedvq/xEGM4/">jsfiddle.net/josedvq/xEGM4</a> and one div triangles: <a href="http://jsfiddle.net/josedvq/3HG6d/">jsfiddle.net/josedvq/3HG6d</a>.

Note: For the triangles to work properly box-sizing should be set to content-box (the CSS default). Add this rule to the triangle's class if necessary.

<h2>Up-pointing CSS triangles</h2>

<small>The following triangle is set to take 25% of the width of its container.</small>

<script async src="https://jsfiddle.net/josedvq/kjfgpm8u/2/embed/html,css,result/dark/"></script>

This code creates a responsive triangle with base-height ratio of 2, and width 100% (of its parent). To modify this code its necessary to understand how to set the triangles proportions. In short:

`(padding-left + width)/padding-bottom = (border-left + border-right)/border-bottom = base/height`

`margin-left = -border-left = -border-right`

`width = padding-left`

<strong>Where base/height is the base to height ratio of the desired CSS triangle. border-left + border-right is the maximum lenght of the base and border-bottom the maximum height of the responsive triangle.</strong> Your responsive triangle won't get any bigger than the inner fixed width triangle formed by this borders. Be sure to set the px widths to values large enough and with the proportions you expect the triangle to have. This internal triangle is uncovered as width increases, so these px values determine its proportions.

The outer div must uncover the fixed width triangle keeping its proportions. In the code given the total width of the triangle is width(50%) + padding-left(50%) = 100% of its parent's width. Padding and width may be set to any other value, but should be the same for both (use 25% to create a 50% total width triangle). The total height of the outer div is height(0) + padding-bottom(50%) = 50%. Here we are taking advantage of percentages in padding being calculated against parent's width. The porportions are kept: total width/total height = 2 in the example.

For example, for an equilateral triangle base = 1.1547*height, so (border-left + border-right)/border-bottom should be base/height = 1.1547. To create a 200px maximum width equilateral triangle set border-left = border-right = 100px and border-bottom = 200/1.1547 = 173px (rounded). Then we have that (padding-left + width)/padding-bottom should also be 1.1547. Say yow want it to take 20% of its parent width. Set padding-left = 10%, width = 10% and padding-bottom = 20%/1.1547 = 18.1865%.


<h2>Down-pointing CSS triangles</h2>
 
<small>The following triangle is set to take 25% of the width of its container.</small>

<script async src="//jsfiddle.net/josedvq/oxqkv4wz/17/embed/html,css,result/dark/"></script>


Change the triangle proportions respecting:


`(padding-left + width)/padding-top = (border-left + border-right)/border-top = base/height`

`margin-left = -border-left = -border-right`

`margin-top = -border-top`

`width = padding-left`

Where base/height is the base-height ratio of the desired responsive triangle. border-left and border-right set the maximum length of the base and border-top sets the maximum height. Set this fixed width triangle to be larger than the largest triangle your layout will use.  Just be sure to use the porportions you want your responsive CSS triangle to have. Then set the div's padding-left, padding-top and width according to these proportions (change just padding-top for total width = 100%).
For the `:after` pseudo-element set <code>margin-left = - border-left</code> and <code>margin-top = - border-top</code>.

<h2>Right-pointing CSS triangles</h2>
 
<small>The following triangle is set to take 25% of the width of its container.</small>

<script async src="//jsfiddle.net/josedvq/3Ly2u7gk/3/embed/html,css,result/dark/"></script>

Change the triangle proportions respecting:

`(padding-top + padding-bottom)/padding-left = (border-top + border-bottom)/border-left = base/height`

`margin-left = -border-left`

`margin-top = -border-top = -border-bottom`

`padding-top = padding-bottom`


<h2>Left-pointing CSS triangles</h2>
 
<small>The following triangle is set to take 25% of the width of its container.</small>

<script async src="//jsfiddle.net/josedvq/9ar5pLmv/2/embed/html,css,result/dark/"></script>

Change the triangle proportions respecting:

`(padding-top + padding-bottom)/width = (border-top + border-bottom)/border-right = base/height`

`margin-top = -border-top = -border-bottom`

`padding-top = padding-bottom`


<h2>Up-right, up-left, down-right, down-left pointing triangles</h2>

For the up-right, down-right, down-left and up-left pointing CSS triangles I'll present the one-div CSS code.

<small>The following triangles are set to take 25% of the width of their container.</small>

<script async src="//jsfiddle.net/josedvq/mhsu4zec/2/embed/html,css,result/dark/"></script>

That's it for now. I'll be writing other articles on CSS shapes soon. If you have any trouble on using these responsive CSS triangles please leave a comment below.
