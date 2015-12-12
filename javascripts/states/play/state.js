app.config(($stateProvider) => {
    $stateProvider
        .state('play', {
            url: '/play',
            controller: 'PlayController'
        });
});