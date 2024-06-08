// first card calculation 

function calculateTriangele(){

//  calculate triangle base and height
const triangle_base = document.getElementById('triangle-base');

const triangle_base_convert_float = parseFloat(triangle_base.value);


const triangle_height = document.getElementById('triangle-height');

const triangle_height_convert_float = parseFloat(triangle_height.value);

const triangle_calculate = 0.5 * triangle_base_convert_float * triangle_height_convert_float;

console.log(triangle_calculate);

const triangle_area = document.getElementById('triangle_area_showcalculation');

triangle_area.innerText =triangle_calculate;

}


// calculate for reactangle arae



function calculateTriangele(){

    //  calculate triangle width and length
    const reactngle_width = document.getElementById('reactngle-width');
    
    const reactngle_width_convert_float = parseFloat(reactngle_width.value);
    
    
    const reactngle_length = document.getElementById('reactngle-length');
    
    const reactngle_length_convert_float = parseFloat(reactngle_length.value);
    
    const reactngle_calculate = reactngle_width_convert_float * reactngle_length_convert_float;
    
    
    const reactngle_area = document.getElementById('reactngle_area_showcalculation');
    
    reactngle_area.innerText =reactngle_calculate;
    
    }
    