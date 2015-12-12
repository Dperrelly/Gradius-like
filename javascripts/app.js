"use strict";

let app = angular.module('TowerDefense', ['ui.router']);
app.config(($locationProvider) => {
    $locationProvider.html5Mode(true);
});
console.log(PIXI);