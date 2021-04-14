import * as React from 'react'

function SvgLogoText({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 262 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M34.844 3.187H28.96L17.704 20.139 6.402 3.187H.564v31.756h7.893L8.41 18.925l7.1 10.974v.047h4.39v-.047l7.051-10.881v15.925h7.893V3.187zM62.778 23.128c0-6.819-4.997-11.348-11.583-11.348-7.239 0-12.049 4.95-12.049 11.815 0 6.911 4.95 11.861 12.376 11.861 5.605 0 9.948-2.942 11.022-7.612h-7.472c-.654 1.028-1.868 1.635-3.456 1.635-2.896 0-4.484-1.588-5.09-3.643h16.158l-.046-.14c.14-.84.14-1.728.14-2.568zm-11.583-5.511c2.429 0 4.064 1.308 4.484 3.783h-9.247c.56-2.289 2.195-3.783 4.763-3.783zM70.713 8.744c2.429 0 4.437-1.821 4.437-4.25 0-2.475-2.008-4.296-4.437-4.296-2.475 0-4.437 1.821-4.437 4.296 0 2.429 1.962 4.25 4.437 4.25zm3.83 3.55h-7.566v22.649h7.566v-22.65zM87.381 1.786h-7.566v33.157h7.566V1.786zM96.49 8.744c2.428 0 4.437-1.821 4.437-4.25 0-2.475-2.009-4.296-4.437-4.296-2.475 0-4.437 1.821-4.437 4.296 0 2.429 1.962 4.25 4.437 4.25zm3.829 3.55h-7.565v22.649h7.565v-22.65zM118.762 2.486c-7.472 0-12.61 4.016-12.61 10.368 0 5.043 2.943 7.985 9.201 9.34l5.23 1.167c2.709.514 3.363 1.635 3.363 2.709 0 1.728-1.541 2.802-4.483 2.802-3.737 0-6.165-1.681-6.679-4.483h-7.893c.748 7.845 7.193 11.207 14.338 11.207 7.94 0 13.17-3.969 13.17-10.32 0-5.464-3.783-7.8-9.574-9.06l-4.437-1.027c-2.381-.514-3.642-1.261-3.642-2.99 0-2.054 1.821-3.175 4.53-3.175 3.222 0 4.717 1.635 5.137 4.016h7.94c-.794-8.546-8.454-10.554-13.591-10.554zM159.282 23.128c0-6.819-4.997-11.348-11.582-11.348-7.239 0-12.05 4.95-12.05 11.815 0 6.911 4.951 11.861 12.377 11.861 5.604 0 9.947-2.942 11.021-7.612h-7.472c-.654 1.028-1.868 1.635-3.456 1.635-2.895 0-4.483-1.588-5.091-3.643h16.16l-.047-.14c.14-.84.14-1.728.14-2.568zM147.7 17.617c2.428 0 4.063 1.308 4.483 3.783h-9.247c.561-2.289 2.195-3.783 4.764-3.783zM187.436 12.293h-7.566v1.214c-1.681-1.074-3.736-1.727-6.211-1.727-6.118 0-11.255 5.043-11.255 11.815 0 6.724 5.137 11.815 11.255 11.815 2.475 0 4.53-.654 6.211-1.728v1.26h7.566V12.294zM175.153 29.2c-3.082 0-5.324-2.476-5.324-5.604 0-3.13 2.242-5.651 5.324-5.651 1.682 0 3.316.514 4.717 2.148v7.005c-1.401 1.635-3.035 2.102-4.717 2.102zM207.921 11.92c-3.362 0-5.791 1.074-7.799 2.802v-2.429h-7.566v22.65h7.566V22.007c1.774-1.775 4.11-2.756 7.799-2.896V11.92zM222.357 29.058c-3.222 0-5.184-2.381-5.184-5.463 0-3.083 1.962-5.418 5.184-5.418 2.335 0 4.063 1.355 4.437 3.41h7.145c-.513-5.838-5.324-9.807-11.582-9.807-7.145 0-12.376 4.95-12.376 11.815 0 6.911 5.231 11.861 12.376 11.861 6.258 0 11.069-3.97 11.582-9.807h-7.145c-.374 2.055-2.102 3.41-4.437 3.41zM251.768 11.593c-2.428 0-4.437.794-6.258 2.241V1.786h-7.566v33.157h7.566V20.746c1.308-1.494 2.802-2.288 4.203-2.288 2.475 0 4.11 1.54 4.11 4.763v11.722h7.613V22.007c0-6.445-3.923-10.414-9.668-10.414z"
        fill="#000"
      />
    </svg>
  )
}

export default SvgLogoText
