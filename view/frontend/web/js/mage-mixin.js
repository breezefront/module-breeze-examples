define([
    'jquery'
], function ($) {
    'use strict';

    $.mixin('mage/mage', {
        isValidSelector: function (selector) {
            try {
                document.querySelector(selector);
            } catch (e) {
                return false;
            }

            return true;
        }
    });
});
