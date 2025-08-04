define([], function () {
    'use strict';

    $.mixinSuper('Magento_Swatches/js/swatch-renderer', {
        _OnClick: function ($this, $widget) {
            this._super($this, $widget);
            console.log('hello from mixin');
        }
    });
});
