module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier',
    'plugin:valtio/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    'valtio/state-snapshot-rule': 'warn',
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', ignoreRestSiblings: true },
    ],

    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    // TODO: rules would be nice to remove
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/array-type': ['error', { arraySimple: true }],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    // Avoid false positive TS checks for variables with the same name of global properties
    // see: https://github.com/microsoft/TypeScript/issues/14306#issuecomment-753379360
    // prettier-ignore
    'no-restricted-globals': [
      'error', 'postMessage', 'blur', 'focus', 'close', 'frames',
      'parent', 'opener', 'top', 'length', 'closed', 'location', 'origin',
      'name', 'locationbar', 'menubar', 'personalbar', 'scrollbars',
      'statusbar', 'toolbar', 'status', 'frameElement',
      'customElements', 'external', 'screen', 'innerWidth', 'innerHeight',
      'scrollX', 'pageXOffset', 'scrollY', 'pageYOffset', 'screenX', 'screenY',
      'outerWidth', 'outerHeight', 'devicePixelRatio', 'clientInformation',
      'screenLeft', 'screenTop', 'defaultStatus', 'defaultstatus',
      'styleMedia', 'onanimationend', 'onanimationiteration',
      'onanimationstart', 'onsearch', 'ontransitionend',
      'onwebkitanimationend', 'onwebkitanimationiteration',
      'onwebkitanimationstart', 'onwebkittransitionend', 'isSecureContext',
      'onabort', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough',
      'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncuechange',
      'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave',
      'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied',
      'onended', 'onerror', 'onfocus', 'oninput', 'oninvalid', 'onkeydown',
      'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata',
      'onloadstart', 'onmousedown', 'onmouseenter', 'onmouseleave',
      'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup',
      'onmousewheel', 'onpause', 'onplay', 'onplaying', 'onprogress',
      'onratechange', 'onreset', 'onresize', 'onscroll', 'onseeked',
      'onseeking', 'onselect', 'onstalled', 'onsubmit', 'onsuspend',
      'ontimeupdate', 'ontoggle', 'onvolumechange', 'onwaiting', 'onwheel',
      'onauxclick', 'ongotpointercapture', 'onlostpointercapture',
      'onpointerdown', 'onpointermove', 'onpointerup', 'onpointercancel',
      'onpointerover', 'onpointerout', 'onpointerenter', 'onpointerleave',
      'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onhashchange',
      'onlanguagechange', 'onmessage', 'onmessageerror', 'onoffline',
      'ononline', 'onpagehide', 'onpageshow', 'onpopstate',
      'onrejectionhandled', 'onstorage', 'onunhandledrejection', 'onunload',
      'stop', 'open', 'print', 'captureEvents',
      'releaseEvents', 'getComputedStyle', 'matchMedia', 'moveTo', 'moveBy',
      'resizeTo', 'resizeBy', 'getSelection', 'find', 'createImageBitmap',
      'scroll', 'scrollTo', 'scrollBy', 'onappinstalled',
      'onbeforeinstallprompt', 'crypto', 'ondevicemotion',
      'ondeviceorientation', 'ondeviceorientationabsolute', 'indexedDB',
      'webkitStorageInfo', 'chrome', 'visualViewport', 'speechSynthesis',
      'webkitRequestFileSystem', 'webkitResolveLocalFileSystemURL',
      'openDatabase',
      // the next ones are allowed
      // 'performance', 'window', 'self', 'document', 'setTimeout', 'setInterval', 'addEventListener',
      // 'removeEventListener', 'navigator'
    ]
  },
}
