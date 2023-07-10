import React from 'react'
import Searchbar from '../../components/Searchbar'
import ReactMarkdown from 'react-markdown';
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";

const markdown = `

`;

const JavaScript = () => {

  function downloadPDF(pdfUrl) {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'git-cheat-sheet'; // Gib den Dateinamen für den Download an
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDownload = () => {
    const pdfUrl = "./git-cheat-sheet.pdf";
    downloadPDF(pdfUrl);
  }
  

  return (
    <div className="github-container">
      <div className="github-header">
        <h1>JavaScript</h1>
        <div className="downloadShare-buttons">
          <IoDownloadOutline id="downloadButton" className="download-icon" size={30} onClick={handleDownload}/>
          <IoIosShareAlt id="shareButton" className="share-icon" size={30}/>
        </div>
        <div className="searchbar-container">
            <Searchbar />
        </div>
      </div>
        <div className="github-content">
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </div>        
    </div>
  )
}

export default JavaScript
