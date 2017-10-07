var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 24, /* number of grid columns */
    offset: '10px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '960px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        md: {
            width: '992px',
            fields: '20px'  /* -> @media (max-width: 1100px) */
        },
        sm: {
            width: '720px',
            fields: '10px'
        },
        xs: {
            width: '576px',
            fields: '5px' /* set fields only if you want to change container.fields */
        },
        xxs: {
            width: '380px',
            fields: '5px'
        }
        /*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

smartgrid('./src/precss', settings);