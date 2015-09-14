import config from 'node-config-loader/webpack!../conf/.configloaderrc'
import merge from 'node-config-loader/utils/merge'

function getRuntimeConfig({settings, location, referrer, headers}) {
    settings = settings || {}

    return {
        env: {
            origin: location.origin,
            hash: location.hash,
            pathname: location.pathname,
            search: location.search,
            referrer,
            headers
        },
        config: {
            debug: settings.debug,
            sitePrefix: settings.sitePrefix,
            locale: {
                lang: settings.locale
            }
        }
    }
}

export default function getConfig(opts) {
    return merge(config, getRuntimeConfig(opts))
}
