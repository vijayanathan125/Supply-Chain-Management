// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';

// function DocumentRenderer(props) {
//     // const[doc, setdoc] = useState(props.value);
//     const[doc] = useState(props.value);
const DocumentRenderer = ({param, selectValue}) => {
    // const onDocChange = (event) => {
    //     props.onDocChange(event.target.value);
    //     setdoc(event.target.value);
    // }

    const onFormSelect = () => {
        var e = document.getElementById("dropSelect");
        //console.log("the class name",document.getElementsByClassName("dropSelect"))
        var value = e.value;
        console.log("form select", value);
        selectValue(value);
     }
    return(
        <div>
            {/* <select value={doc} onChange={onDocChange}> */}
            {/* <select value={doc} > */}
            <select name="optionValue" id="dropSelect" onInput={onFormSelect}>
                <option value="rm"> Rm </option>
                <option value="finishedgoods"> Finished Goods </option>
                <option value="quality"> Quality </option>
                <option value="insurance"> Insurance </option>
                
            </select>
        </div>
    )
}

export default DocumentRenderer;