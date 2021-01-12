﻿var Page = function () {
    //=================//
    //  svg generator
    //=================//
    var _svgGenerator = function (selector) {
        var svg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="52" height="60" viewbox="0 0 51.96152422706631 60"><path fill="#263238" d="M21.650635094610962 2.4999999999999996Q25.980762113533157 0 30.31088913245535 2.5L47.63139720814412 12.5Q51.96152422706631 15 51.96152422706631 20L51.96152422706631 40Q51.96152422706631 45 47.63139720814412 47.5L30.31088913245535 57.5Q25.980762113533157 60 21.650635094610962 57.5L4.330127018922193 47.5Q0 45 0 40L0 20Q0 15 4.330127018922194 12.5Z"></path></svg>';
        $(selector).append(svg);
    };
    /////////////////////

    //====================//
    //  add hexagon rate to skills
    //====================//
    var _initSkills = function () {
        $('ul.skills').children().each(function (_i, e) {
            var $li = $(e),
                rate = $li.data('rate');

            for (var i = 0; rate && i < 5; i++)
                if (i < rate)
                    $li.prepend('<i class="hexagon"></i>');
                else $li.prepend('<i class="hexagon b-lightgrey"></i>');
        });
    };
    ////////////////////////

    //====================//
    //  init hexagon svg
    //====================//
    var _initSvg = function () {
        Page.svg('.hexagon');
    };
    ////////////////////////


    //=============//
    //  init Page
    //=============//
    var _init = function () {
        _initSkills();
        _initSvg();
    };
    /////////////////

    return {
        init: _init,
        svg: _svgGenerator,
    }
}();

$(function () {
    Page.init();
});