import * as React from "react"
import { A, Ul, Li, H3 } from "@reflexjs/components"

export const BlockCategoriesNav = ({ categories, onClick, ...props }) => (
  <React.Fragment>
    <H3 my="4" fontSize="xl">
      Categories
    </H3>
    <Ul listStyle="none" p="0" m="0" {...props}>
      {categories.map(({ slug, name }) => (
        <Li key={name} mb="2">
          <A
            href={`#${slug}`}
            color="text"
            fontSize="md"
            onClick={(e) => {
              onClick(e)
            }}
          >
            {name}
          </A>
        </Li>
      ))}
    </Ul>
  </React.Fragment>
)
