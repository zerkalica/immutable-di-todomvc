import {Semaphore} from 'immutable-di/utils/Promised'
import {Factory} from 'immutable-di/define'

function _Semaphore() {
    return Semaphore()
}

export default Factory()(_Semaphore)
