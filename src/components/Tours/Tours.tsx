import React from 'react'
import useFetchProjects from './Fetch'

// space id 87og6nphvq4f
//  J780m9YoTjiK2dAjkEdOslFFr2HJ3_bkqgtUsfNsflk
const Tours = () => {
  const {loading,projects}= useFetchProjects()
  console.log(projects)
  return (
    <div>Tours</div>
  )
}

export default Tours