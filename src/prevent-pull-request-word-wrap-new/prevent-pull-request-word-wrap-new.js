// @flow

import addStyleToPage from '../add-style'

export default function preventPullRequestWordWrapNew() {
    const cssRule = createCssRule()
    addStyleToPage(cssRule)
}

function createCssRule() {
    const cssRule = `
        .code-diff {
            white-space: pre!important
        }

        .diff-chunk-inner.side-by-side {
            width:fit-content!important
        }
    `
    return cssRule
}
