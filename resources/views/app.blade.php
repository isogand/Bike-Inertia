<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Omnifood is a fictitious premium food delivery service with the mission to bring affordable and healthy meals to as many people as possible.">
        <link rel="stylesheet" type="text/css" href="css/vendor/normalize.css">
        <link rel="stylesheet" type="text/css" href="css/vendor/grid.css">
        <link rel="stylesheet" type="text/css" href="css/vendor/animate.css">
        <link rel="stylesheet" type="text/css" href="css/vendor/ionicons.min.css">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body class="font-sans antialiased">
        @inertia

        @env ('local')
{{--            <script src="http://localhost:8080/js/bundle.js"></script>--}}
        @endenv

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://gist.github.com/warrickbayman/1fe312b7a3beab3c1f0f711521144999#file-app-blade-php"></script>
        <script src="//cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
        <script src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="//cdn.jsdelivr.net/selectivizr/1.0.3b/selectivizr.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
{{--        <script src="/js/jquery.waypoints.min.js"></script>--}}
{{--        <script src="resources/js/scripts.js"></script> <!-- Sticky nav -->--}}
        <script src="http://maps.google.com/maps/api/js?sensor=true"></script>
{{--        <script src="vendor/js/gmaps.js"></script>--}}
    </body>
</html>
