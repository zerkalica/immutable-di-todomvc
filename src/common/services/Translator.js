import {Factory} from 'immutable-di/define'
import translator from 'babelfish-plus'

function Translator(options) {
    return translator(options)
}

export default Factory({
    locale: ['i18n', 'locale'],
    phrases: ['i18n', 'phrases']
})(Translator)
