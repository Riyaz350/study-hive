import { useContext, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
import pdf from '../../1.pdf'
import axios from 'axios';
import swal from 'sweetalert';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const SubmittedAssignmentsRow = ({assignment, assignments, setAssignments}) => {

    const {user} =useContext(AuthContext)
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    const {_id, link, note, name, title, mark, submissionTime } = assignment

    const handleSubmit = e =>{
        const Mark = e.target.mark.value
        const Feedback = e.target.feedback.value
        console.log(Mark, Feedback)

        axios.patch(`https://assignment-server-sand.vercel.app/submitted?_id=${_id}&email=${user?.email}`,
         { status: 'Completed', 
            marks: Mark, 
            feedback:Feedback })
            .then(data =>{
                {
                    const filtered = assignments.filter(assignment=> assignment._id !== _id)
                    setAssignments(filtered)
                    swal("Marks Submitted", "", "success");

                }
            })

    }
    
    return (
        <tr className="border-2 border-black  rounded-lg ">
        <th>{name}</th>
        <th>{title}</th>
        <th>{mark}</th>
        <th>{submissionTime}</th>

        <th>
            <button className="btn font-bold bg-[#1e1e24] border-2 border-[#FFDDB6] text-[#FFDDB6] rounded-lg hover:bg-[#FFDDB6] hover:text-[#92140c] hover:border-[#92140c]" onClick={()=>document.getElementById(_id).showModal()}>Give Mark</button>
            <dialog id={_id} className="modal max-w-6xl mx-auto">
            <div className="modal-box max-w-6xl bg-[#FFDDB6]">
                <form onSubmit={handleSubmit} className=" space-y-2" method="dialog">
                <h3 className="font-bold text-lg">Link: {link}</h3>
                <p className=" text-xl">Note: {note}</p>
                <div className='p-10 m-10'>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                    <Document file={link} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.apply(null, Array(numPages))
                        .map((x,i) =>i+1)
                        .map((page) => {
                            return(
                            <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false}/>
                            )
                        })
                        }
                    </Document>
                        
                </div>
                <input required className="p-2 border-2 border-gray-200 rounded-lg" name="mark" type="number" max={mark} placeholder='Obtained marks' />
                <textarea required name="feedback" placeholder="Feedback"  className="textarea textarea-bordered textarea-lg w-full " ></textarea>                                
                <div className='flex justify-between items-center'>
                <button className="btn font-bold bg-[#1e1e24] border-2 border-[#FFDDB6] text-[#FFDDB6] rounded-lg hover:bg-[#FFDDB6] hover:text-[#92140c] hover:border-[#92140c]">Submit</button>
                <p className='bg-[#1e1e24] border-2 border-[#FFDDB6] text-[#FFDDB6] p-2 rounded-lg'>Press Esc to close</p>
                </div>
                </form>
           </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </th>
    </tr>
    );
};

export default SubmittedAssignmentsRow;