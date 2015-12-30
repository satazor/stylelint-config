# stylelint-config

My own [stylelint](http://stylelint.io/) configurations, based on [stylelint-config-suitcss](https://github.com/stylelint/stylelint-config-suitcss).


## Installation

`$ npm install --save-dev satazor@stylelint-config`

This config was tested with `stylelint@^3.14.4`. Use other versions at your own risk. I will try to keep this project up to date with the changes of `eslint` and the plugins used here.


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
