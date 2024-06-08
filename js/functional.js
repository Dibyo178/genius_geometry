
// functional calculation


function getInputValueId(Inputfieldvalue) {

    const find_field = document.getElementById(Inputfieldvalue);

    let find_field_value = parseFloat(find_field.value);

    if (find_field_value) {


        return find_field_value;


    }

    else {

        let find_field_value = parseFloat(find_field.innerText);

        return find_field_value;

    }

    //    

}

// reuseable area


function getElementById(elementId, area) {

    const element = document.getElementById(elementId);

    return element.innerText = area;
}



// first card calculation 

function calculateTriangele() {

    const base = getInputValueId('triangle-base');

    const height = getInputValueId('triangle-height');

    const triangle_calculate = 0.5 * base * height;

    // const triangle_area = document.getElementById('triangle_area_showcalculation');

    // triangle_area.innerText =triangle_calculate;

    getElementById('triangle_area_showcalculation', triangle_calculate);

    addBycalculator('Reactngle', triangle_calculate);

}


// calculate for reactangle arae



function calculateReactangle() {


    const width = getInputValueId('reactngle-width');

    const length = getInputValueId('reactngle-length');

    const reactngle_calculate = width * length;

    // const reactngle_area = document.getElementById('reactngle_area_showcalculation');

    // reactngle_area.innerText =reactngle_calculate;



    // element calculation by function

    getElementById('reactngle_area_showcalculation', reactngle_calculate);


    addBycalculator('Reactngle', reactngle_calculate);

}


// calculate for Parallelogram arae



function calculateParallelogram() {


    const width = getInputValueId('parallelogram-width');

    const height = getInputValueId('parallelogram-height');

    const parallelogram_calculate = width * height;

    // const parallelogram_area = document.getElementById('parallelogram_area_showcalculation');

    // parallelogram_area.innerText =parallelogram_calculate;

    getElementById('parallelogram_area_showcalculation', parallelogram_calculate);

    addBycalculator('Parallelogram', parallelogram_calculate);

}

// calculate for Eipllise arae



function calculateEllipse() {


    const area = getInputValueId('ellipse-area');

    const base = getInputValueId('ellipse-base');

    const ellipse_calculate = 3.1416 * area * base;

    // const parallelogram_area = document.getElementById('parallelogram_area_showcalculation');

    // parallelogram_area.innerText =parallelogram_calculate;

    getElementById('ellipse_area_showcalculation', ellipse_calculate);


    addBycalculator('Ellipse', ellipse_calculate);

}


// calculate for Pentagon arae



function calculatepentagon() {


    const p = getInputValueId('pentagon-p');

    const base = getInputValueId('pentagon-base');

    const pentagon_calculate = p * base;

    // const parallelogram_area = document.getElementById('parallelogram_area_showcalculation');

    // parallelogram_area.innerText =parallelogram_calculate;

    getElementById('pentagon_area_showcalculation', pentagon_calculate);

    addBycalculator('Pentagon', pentagon_calculate);

}



// calculate for Rhombus arae



function calculaterhombus() {


    const d1 = getInputValueId('rhombus-d1');

    const d2 = getInputValueId('rhombus-d2');

    const rhombus_calculate = .5 * d1 * d2;

    // const parallelogram_area = document.getElementById('parallelogram_area_showcalculation');

    // parallelogram_area.innerText =parallelogram_calculate;

    getElementById('rhombus_area_showcalculation', rhombus_calculate);

    addBycalculator('Rhombus', rhombus_calculate);

}


//  add calculation

function addBycalculator(areatype, area) {

    const areasisplay = document.getElementById('area_calculation');

    const count = areasisplay.childElementCount;

    const p = document.createElement('p');

    // dynamicaly show 

    p.classList.add('my-5');

    p.innerHTML = `${count + 1}.${areatype} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">convert</button>`;

    areasisplay.appendChild(p);
}

