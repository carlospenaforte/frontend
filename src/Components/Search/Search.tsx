import React, { JSX, useState } from 'react'

type Props = {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
  const [search, setSearch] = useState("")

  return (
    <div>Search</div>
  )
}

export default Search