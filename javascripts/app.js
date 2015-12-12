"use strict";

let app = angular.module('Gradius', ['ui.router']);
app.config(($locationProvider) => {
    $locationProvider.html5Mode(true);
});
