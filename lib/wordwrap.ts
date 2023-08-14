export default function wordwrap(
  start: number,
  stop: number,
  mode: 'soft' | 'hard' = 'hard'
) {
  const re = mode === 'hard' ? /\b/ : /(\S+\s+)/

  return function (text: string) {
    let chunks = text
      .toString()
      .split(re)
      .reduce(function (acc, x) {
        if (mode === 'hard') {
          for (let i = 0; i < x.length; i += stop - start) {
            acc.push(x.slice(i, i + stop - start))
          }
        } else acc.push(x)
        return acc
      }, [])
    return chunks
      .reduce(
        function (lines, rawChunk) {
          if (rawChunk === '') return lines

          let chunk = rawChunk.replace(/\t/g, '    ')

          let i = lines.length - 1
          if (lines[i].length + chunk.length > stop) {
            lines[i] = lines[i].replace(/\s+$/, '')

            chunk.split(/\n/).forEach(function (c: string) {
              lines.push(new Array(start + 1).join(' ') + c.replace(/^\s+/, ''))
            })
          } else if (chunk.match(/\n/)) {
            let xs = chunk.split(/\n/)
            lines[i] += xs.shift()
            xs.forEach(function (c: string) {
              lines.push(new Array(start + 1).join(' ') + c.replace(/^\s+/, ''))
            })
          } else {
            lines[i] += chunk
          }

          return lines
        },
        [new Array(start + 1).join(' ')]
      )
      .join('\n')
  }
}
