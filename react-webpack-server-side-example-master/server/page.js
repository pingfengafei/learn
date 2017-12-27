/** @jsx React.DOM */

var React = require("react");

var Application = require("../app/Application");

var styleCollector = require("./style-collector");

module.exports = function(req, scriptFilename) {

	var html;
	var css = styleCollector.collect(function() {
		html = React.renderComponentToString(<Application url={req.url}/>);
	});

	function handleClick(){
		console.log('button clicked')
	}

	return React.renderComponentToString(
		<html>
			<head>
				<style id="server-side-style" dangerouslySetInnerHTML={{__html: css}} />
			</head>
			<body>
				<div id="content" dangerouslySetInnerHTML={{__html: html}} />
				{/*<script src={"assets/" + scriptFilename}></script>*/}
				<script src={"assets/bundle.js"}></script>
				<div onClick={this.handleClick}>div-button</div>
			</body>
		</html>
	);
}