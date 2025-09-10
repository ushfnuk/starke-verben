'use client'

import { revalidateWords } from "../actions"

const MoreButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="btn btn-neutral" onClick={() => revalidateWords()}>{children}</button>
  )
}

export default MoreButton
