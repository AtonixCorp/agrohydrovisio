import moment from 'moment'
import 'moment/locale/fr'
import 'moment/locale/es'

moment.locale('en')

const now = moment()
console.log(now.format('LLLL'))
