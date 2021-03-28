import fs from 'fs'
import https from 'https'
import {bail} from 'bail'
import concat from 'concat-stream'
import unified from 'unified'
import parse from 'rehype-parse'
import $ from 'hast-util-select'
import {ariaAttributes} from './index.js'

/**
 * @typedef {import('hast').Element} Element
 */

https.get('https://www.w3.org/TR/wai-aria-1.2/', onresponse)

/**
 * @param {import('http').IncomingMessage} response
 */
function onresponse(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

/**
 * @param {Buffer} buf
 */
function onconcat(buf) {
  var tree = unified().use(parse).parse(buf)
  /** @type {Element[]} */
  var entries = $.selectAll('#index_state_prop dt a', tree)
  var index = -1
  /** @type {string} */
  var data

  if (entries.length === 0) {
    bail(new Error('Couldn’t find entries'))
  }

  while (++index < entries.length) {
    data = String(entries[index].properties.href).slice(1)

    if (data && !ariaAttributes.includes(data)) {
      ariaAttributes.push(data)
    }
  }

  fs.writeFile(
    'index.js',
    'export var ariaAttributes = ' +
      JSON.stringify(ariaAttributes.sort(), null, 2) +
      '\n',
    bail
  )
}
