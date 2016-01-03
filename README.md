# stylelint-config

[![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[david-dm-url]:https://david-dm.org/satazor/stylelint-config
[david-dm-image]:https://img.shields.io/david/satazor/stylelint-config.svg
[david-dm-dev-url]:https://david-dm.org/satazor/stylelint-config#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/satazor/stylelint-config.svg

My own [stylelint](http://stylelint.io/) configurations, based on [stylelint-config-suitcss](https://github.com/stylelint/stylelint-config-suitcss).


## Installation

`$ npm install --save-dev satazor@stylelint-config`

This config was tested with `stylelint@^3.2.0`. Use other versions at your own risk. I will try to keep this project up to date with the changes of `stylelint` and the plugins used here.


## Usage

Create a `.stylelintrc` file with:

```json
{
    "extends": "@satazor/stylelint-config"
}
```

Feel free to override any rules you don't agree with.


## File name convention

All files should be lowercased with dashes as separators

```
// Good
my-button.css
app.css

// Bad
MyButton.css
my_button.css
App.css
```


## License

[MIT License](http://opensource.org/licenses/MIT)
