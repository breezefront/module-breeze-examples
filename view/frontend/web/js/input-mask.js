define([
    'vanillaTextMask'
], function (vanillaTextMask) {
    'use strict';

    $(document).on('breeze:load', () => {
        var input = $('#telephone');

        if (!input.length) {
            return;
        }

        vanillaTextMask.maskInput({
            inputElement: input[0],
            guide: false,
            mask: ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
        });

        input.attr('placeholder', '(096) 123-4567');
    });
});
