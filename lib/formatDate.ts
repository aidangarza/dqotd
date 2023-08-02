import { format, parseISO } from 'date-fns'

export default function formatDate(dateString: string) {
  const date = parseISO(dateString)
  return format(date, 'LLLL	d, yyyy')
}
