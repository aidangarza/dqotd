import React from 'react'
import wordwrap from '../lib/wordwrap'
import { SITE_DOMAIN } from '../lib/constants'

const WIDTH = 1024
const PADDING = 48
const PHOTO_SIZE = 100
const LINE_HEIGHT = 64
const QUOTE_FONT_SIZE = 48
const NAME_FONT_SIZE = 32
const QUOTE_MARK_FONT_SIZE = 200
const ATTR_FONT_SIZE = 24

type Props = {
  quote: string
  name: string
  picture: string
  color?: string
}

const wrap = wordwrap(0, 40, 'hard')

const QuoteImage = ({ quote, name, picture, color = '#ff8800' }: Props) => {
  const wrappedQuote = wrap(quote.trim()).split('\n')

  const height = wrappedQuote.length * LINE_HEIGHT + PADDING * 3 + PHOTO_SIZE

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="100%"
      viewBox={`0 0 ${WIDTH} ${height}`}
      fill="none"
      role="img"
    >
      {/* Background Rectangle */}
      <rect width="100%" height="100%" rx="12" fill={color} />

      <text
        xmlns="http://www.w3.org/2000/svg"
        x={PADDING / 2}
        y={QUOTE_MARK_FONT_SIZE - PADDING}
        fontSize={QUOTE_MARK_FONT_SIZE}
        fill="#000000"
        fillOpacity={0.1}
        fontFamily="Times New Roman"
      >
        <tspan fontWeight="bold" id="tspan1874">
          “
        </tspan>
        <tspan
          x={WIDTH - PADDING / 2 - QUOTE_MARK_FONT_SIZE / 2}
          y={height - PADDING * 2}
          fontWeight="bold"
          id="tspan1874"
        >
          ”
        </tspan>
      </text>

      {/* Quote Text */}
      <g transform={`translate(${PADDING}, ${LINE_HEIGHT + PADDING})`}>
        {wrappedQuote.map((line: string, index: number) => (
          <text
            key={index}
            x="0"
            y={index * LINE_HEIGHT}
            fontSize={QUOTE_FONT_SIZE}
            fill="#000000"
            fontFamily="sans-serif"
            textAnchor="left"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            width="100%"
            height="100%"
          >
            {line}
          </text>
        ))}
      </g>

      {/* Speaker Image and Name */}
      <g>
        <clipPath id="circleMask">
          <circle
            cx={WIDTH - PADDING - PHOTO_SIZE / 2}
            cy={height - PADDING - PHOTO_SIZE / 2}
            r={PHOTO_SIZE / 2}
          />
        </clipPath>
        <image
          href={picture}
          x={WIDTH - PADDING - PHOTO_SIZE}
          y={height - PADDING - PHOTO_SIZE}
          width={PHOTO_SIZE}
          height={PHOTO_SIZE}
          clipPath="url(#circleMask)"
        />
        <text
          x={WIDTH - PADDING - PHOTO_SIZE - PADDING}
          y={height - PADDING - PHOTO_SIZE / 2 + NAME_FONT_SIZE / 2}
          fontSize={NAME_FONT_SIZE}
          textAnchor="end"
          fontFamily="sans-serif"
          fill="#000000"
        >
          - {name}
        </text>
      </g>
      <text
        y={height - ATTR_FONT_SIZE}
        x={WIDTH / 2}
        textAnchor="middle"
        fill="#000000"
        fontSize={ATTR_FONT_SIZE}
      >
        {SITE_DOMAIN}
      </text>
    </svg>
  )
}

export default QuoteImage
