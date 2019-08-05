import * as React from 'react'

const AccordionSection = (props: any) => (
  <div className="accordion-section">
    <div className="accordion-toggle">
      {props.children}
    </div>
    <div className="acccordion-content">
      {props.children}
    </div>
  </div>
)

export default AccordionSection
