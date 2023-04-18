import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './BillPdfViewer.css'
import {Viewer, Worker} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import DocViewer,{DocViewerRenderers} from 'react-doc-viewer';


const BillPDFViewer = ({open, onClose, rowInfo}) => {
    
     const [viewPDF, setViewPDF] = useState('');

    // setViewPDF(samplePDF);

//     var bin = window.atob(viewPDF);
//     console.log(bin);
// console.log('File Size:', Math.round(bin.length / 1024), 'KB');
// console.log('PDF Version:', bin.match(/^.PDF-([0-9.]+)/)[1]);
    //const docs=[{uri : viewPDF },]

    useEffect(() => {
        fetch('http://localhost:4000/Bill')
        .then((response) => response.json())
        .then((data)=> {
            console.log(data[0]);
            setViewPDF(data[0].pdf)
        })
    })
    const newplugin = defaultLayoutPlugin();

    if(!open) return null

    return(
        <div onClick={onClose} className='overlay'>
        <div onClick={(e) => e.stopPropagation()} className='modal-content ' >
            
            <h5>PDF</h5>
            <div className='pdf-container'>
                <Worker workerUrl='http://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                    {viewPDF && <>
                        <Viewer fileUrl={viewPDF} plugins={[newplugin]} />
                    </>}
                    {!viewPDF && <>no PDF</>}
                </Worker>
                {/* <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} /> */}

            </div>
            <br/>
            
            {/* <button onClick={onClose} className='close-modal'>close</button> */}
            <button type="button"  onClick={onClose}  class="btn btn-danger mb-2 btn-sm " style={{position:'absolute', top:'10px', right:'10px'}}>close</button> 

            
        </div>


     </div>
    )
}
export default BillPDFViewer