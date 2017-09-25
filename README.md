# tilted.js
## Installation
### NPM
`npm install tilted.js`

### CDN
`<script src="https://cdn.jsdelivr.net/npm/tilted.js/dist/tilted.js"></script>`

## Instructions
Run the function *tilted()*  with the parameters of  (id of element, properties)
```
tilted('thisIsaID', {
      intensity: 15,
      onHover: true,
      disableX: false,
      disableY: false,
      invert: false
    });
```
## Properties
| Property Name        | Description           | Defaut Value  |Value Type |
| ------------- |:-------------:| -----:| -----:|
| intensity     | controls the intensity | 12 | int |
| onHover     | controls if tilt happens only on hover | false | boolean |
| disableX     | enables/disables tilt on the X axis | false | boolean |
| disableY     | enables/disables tilt on the Y axis | false | boolean |
| invert     | tilt will be inverted | false | boolean |
