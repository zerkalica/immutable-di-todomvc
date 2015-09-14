import {Factory} from 'immutable-di/define'
import translator from 'babelfish-plus'

function Translator(options) {
    return translator(options)
}

export default Factory({
    locale: ['config', 'i18n', 'locale'],
    phrases: ['config', 'i18n', 'phrases']
})(Translator)
