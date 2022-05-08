import React from 'react'

type Props = {
    heading: string;
}

export default function Heading({ heading }: Props) {
  return (
      <div className="row">
          <div className="section-header text-left col-12">
              <h2>{heading}</h2>
          </div>
      </div>
  );
}