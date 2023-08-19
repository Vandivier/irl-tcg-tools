import React, { useState, ReactNode } from "react"

type AccordionProps = {
  title: ReactNode
  children: ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full max-w-md mx-auto">
      <button
        className="w-full py-2 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="mt-2 border rounded-md p-4">{children}</div>}
    </div>
  )
}

export default Accordion
