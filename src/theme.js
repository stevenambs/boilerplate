import React from 'react'
import { theme } from '@chakra-ui/core'
import merge from 'deepmerge'
import feather from 'feather-icons'

export default merge(theme, {
  sizes: {
    '72': '18rem',
  },
  icons: Object.assign(
    {},
    ...Object.keys(feather.icons).map((key) => ({
      [key]: {
        path: (
          <g
            dangerouslySetInnerHTML={{ __html: feather.icons[key].contents }}
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ),
        viewBox: feather.icons[key].attrs.viewBox,
      },
    }))
  ),
})
