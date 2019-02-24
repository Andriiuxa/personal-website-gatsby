import React from "react"
import { Document, Page } from "react-pdf"
import file from "../images/cv.pdf"

const MyDocument = () => (
  <div id="pdf-doc">
    <Document file={file}>
      <Page pageNumber={1} />
    </Document>
  </div>
)

export default MyDocument
