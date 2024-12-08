/*
    Mobile Menu Core Style
*/
.slicknav_btn {
	position: relative;
	display: block;
	float: right;
	padding: 0.438em 0.625em 0.438em 0.625em;
	line-height: 1.125em;
	cursor: pointer;
}
.slicknav_menu .slicknav_menutxt {
	display: block;
	line-height: 1.188em;
	float: left;
}
.slicknav_menu .slicknav_icon {
	float: left;
	margin: 0.188em 0 0 0.438em;
}
.slicknav_menu .slicknav_no-text {
	margin: 0
}
.slicknav_menu .slicknav_icon-bar {
	display: block;
	width: 1.125em;
	height: 0.125em;
	-webkit-border-radius: 1px;
	-moz-border-radius: 1px;
	border-radius: 1px;
	-webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
}
.slicknav_btn .slicknav_icon-bar + .slicknav_icon-bar {
	margin-top: 0.188em
}
.slicknav_nav {
	clear: both
}
.slicknav_nav ul, .slicknav_nav li {
	display: block
}
.slicknav_nav .slicknav_arrow {
	font-size: 0.8em;
	margin: 0 0 0 0.4em;
}
.slicknav_nav .slicknav_item {
	display: block;
	cursor: pointer;
}
.slicknav_nav a {
	display: block
}
.slicknav_nav .slicknav_item a {
	display: inline
}
.slicknav_menu:before, .slicknav_menu:after {
	content: " ";
	display: table;
}
.slicknav_menu:after {
	clear: both
}
/* IE6/7 support */
.slicknav_menu {
zoom: 1
}
/* 
    User Default Style
    Change the following styles to modify the appearance of the menu.
*/

.slicknav_menu {
	font-size: 16px;
}
/* Button */
.slicknav_btn {
	margin: 5px 5px 6px;
	text-decoration: none;
	text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	background-color: #222222;
}
/* Button Text */
.slicknav_menu .slicknav_menutxt {
	color: #FFF;
	font-weight: bold;
	text-shadow: 0 1px 3px #000;
}
/* Button Lines */
.slicknav_menu .slicknav_icon-bar {
	background-color: #f5f5f5;
}
.slicknav_menu {
	background: #4c4c4c;
	padding: 5px;
}
.slicknav_nav {
	color: #fff;
	margin: 0;
	padding: 0;
	font-size: 0.875em;
}
.slicknav_nav, .slicknav_nav ul {
	list-style: none;
	overflow: hidden;
}
.slicknav_nav ul {
	padding: 0;
	margin: 0 0 0 20px;
}
.slicknav_nav .slicknav_item {
	padding: 5px 10px;
	margin: 2px 5px;
}
.slicknav_nav a {
	padding: 5px 10px;
	margin: 2px 5px;
	text-decoration: none;
	color: #fff;
}
.slicknav_nav .slicknav_item a {
	padding: 0;
	margin: 0;
}
.slicknav_nav .slicknav_item:hover {
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	border-radius: 6px;
	background: #ccc;
	color: #fff;
}
.slicknav_nav a:hover {
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	border-radius: 6px;
	background: #ccc;
	color: #222;
}
.slicknav_nav .slicknav_txtnode {
	margin-left: 15px;
}