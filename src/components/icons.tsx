import * as React from "react"

export function PottedPlant(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 18h16" />
      <path d="M6 14l.6-1.7a2 2 0 0 1 1.4-1.3H16a2 2 0 0 1 1.4 1.3L18 14" />
      <path d="M9 18v-4" />
      <path d="M15 18v-4" />
      <path d="M2 22h20" />
      <path d="M8 2h8" />
      <path d="M7 22l-1-5H4c-.5 0-1-.2-1-.5V5c0-.3.5-.5 1-.5h16c.5 0 1 .2 1 .5v11.5c0 .3-.5.5-1 .5h-2l-1 5" />
    </svg>
  )
}
