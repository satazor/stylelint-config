# stylelint-config

My own [stylelint](http://stylelint.io/) configurations, based on [stylelint-config-suitcss](https://github.com/stylelint/stylelint-config-suitcss).


## Installation

`$ npm install --save-dev satazor@stylelint-config stylelint@^3.14.4`


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
