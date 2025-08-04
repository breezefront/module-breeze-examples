# Breeze Examples

This repository contains various Breeze customization examples.

## Installation

```bash
composer require swissup/module-breeze-examples
bin/magento module:enable Swissup_BreezeExamples
```

## Examples

 1. Input mask for the firstname field in create account form.
    - [XML layout update](https://github.com/breezefront/module-breeze-examples/blob/master/view/frontend/layout/breeze_default.xml#L21-L36)
    - [JS code](https://github.com/breezefront/module-breeze-examples/blob/master/view/frontend/web/js/input-mask.js)
 2. Mixin for `mage/mage` component.
    - [XML layout update](https://github.com/breezefront/module-breeze-examples/blob/master/view/frontend/layout/breeze_default.xml#L10-L16)
    - [JS code](https://github.com/breezefront/module-breeze-examples/blob/master/view/frontend/web/js/mage-mixin.js)
 3. Mixin for `Magento_Swatches/js/swatch-renderer` component.
    - [XML layout update](https://github.com/breezefront/module-breeze-examples/blob/master/view/frontend/layout/breeze_default.xml#L42-L47)
    - [JS code](https://github.com/breezefront/module-breeze-examples/blob/master/view/frontend/web/js/swatch-renderer-mixin.js)
